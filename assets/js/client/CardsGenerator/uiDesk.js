import {cardsStructure} from './cardsStructure.js';
import { containersStructure } from './containersStructure.js';
export const uiDesk = {
    desk: [],
    cardSchema: {},
    type: '',
    init: ()=>{
        
        uiDesk.cardSchema = document.createElement(cardsStructure.mainCardContainer);

        cardsStructure.cardClasses.forEach(classelement => {
            uiDesk.cardSchema.classList.add(classelement);    
        });
        
        cardsStructure.attributes.forEach(attribute => {
            for (const key in attribute) {
                uiDesk.cardSchema.setAttribute(key, attribute[key]);
            }
        });

        cardsStructure.childElements.forEach(element => {
            uiDesk.cardSchema.appendChild(document.createElement(element));
        })
    },

    fillDesk: (typeInserted)=>{
        //Compruebo si el tipo de carta que se ha insertado es válido
        console.log("tipo" . typeInserted);
        if(cardsStructure.clubs.hasOwnProperty(typeInserted)){
            //Recorro el array de tipos de  cartas de mi JSON 
            console.log("Hola")
            cardsStructure.clubs[typeInserted].forEach(item => {
                //Genero las 12 cartas de manera dinamica
                for(let i = 1; i <= 12; i++){
                    let cardClone = uiDesk.cardSchema.cloneNode(true);
                    //le pongo un id unico
                    cardClone.setAttribute('id', item + i);
                    //Le añado un event listener
                    cardClone.addEventListener('dragstart', (event) => {
                        //Genero el objeto que contendra los datos que le vamos a enviar al contenedor sobre el que queremos colocar las cartas
                        const sendData = {
                            id: event.target.id,
                            club: event.target.dataset.club
                        }
                        //Envio los datos al contenedor sobre el que quiero colocar las cartas
                        event.dataTransfer.setData("text", JSON.stringify(sendData));
                    });
                    //En el "clon" propiamente dicho guardo con dataset el palo de la carta
                    cardClone.dataset.club = item;
                    //Cambio el contenido de los hijos SOLO los que sean contenedores usando children ya que child  me coge todos los elementos incluso espacios blancos
                    //Cojo la posicion de cada hijo y le cambio su contenido por el que se desee
                    cardClone.children[0].textContent = i;
                    cardClone.children[1].textContent = item;
                    cardClone.children[2].textContent = i;
                    uiDesk.desk.push(cardClone);
                }
            });

        }else{
            return false;
        }
    },

    generateDesk:()=>{
        //Creo el contenedor que va a contener la baraja
        let mainContainer = document.createElement(containersStructure.mainContainerElement);
        //Se lo inserto al html
        document.body.appendChild(mainContainer);
        //Le añado las clases que tenga mi clase container structure que es la clase que define como estara compuesto el contenedor de la baraja
        mainContainer.classList.add(containersStructure.classes[0]);
        //Le agrego el atributo id y el contenido de este proveniente de containersStructure
        mainContainer.setAttribute('id', containersStructure.containers[0]);
        //Recorro el array de cartas de la clase y relleno el contenedor
        uiDesk.desk.forEach(card => {
            mainContainer.appendChild(card);
        });
    }
}


