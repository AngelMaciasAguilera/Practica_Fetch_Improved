export const CardPosHandler = {
    sendPosition: (data) => {
        console.log("Hola que tal")
        fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }
}