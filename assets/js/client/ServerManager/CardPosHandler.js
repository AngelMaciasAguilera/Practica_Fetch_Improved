export const CardPosHandler = {
    //url de mi servidor para mejorar el codigo creo una propiedad que se llame url y si mi servidor cambia no tengo que cambiar linea por linea
    url : "http://localhost:3000",

    //Envia la posicion al servidor 
    sendPosition: (data) => {
        fetch(CardPosHandler.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    },

    //Esta funcion obtiene las cartas y sus posiciones
    /*
        ¿Como funciona?
        Me pasan la referencia de un array en el que voy a volcar el contenido de las posiciones de las cartas
        Recorro la respuesta del servidor
        Lo casteo a json
        Y realizo el volcado
    */
    obtainCardPositions : (arrayToInsert) => {
        fetch(CardPosHandler.url).then(
            (response) =>{
                response.json().then(
                    (array)=>{
                        arrayToInsert.push(...array)
                    }, 

                    (errorParsing) => {
                        console.log(errorParsing);
                    }
                );
            },
            (error) =>{
                console.log(error);
            }

        );
    }
}