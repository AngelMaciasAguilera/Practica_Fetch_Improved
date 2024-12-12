import express from 'express';       // Importa el framework Express para crear y gestionar el servidor web.
import bodyParser from 'body-parser'; //Esto parseara lo que me llegue por post en el cuerpo del mensaje
import cors from 'cors';             // Importa CORS para permitir peticiones entre diferentes dominios.

const app = express();               // Crea una instancia de la aplicación de Express.
const port = 3000;                   // Define el puerto en el que el servidor escuchará peticiones.

app.use(cors());                     // Habilita CORS en la aplicación para permitir peticiones desde otros orígenes.
app.use(bodyParser.json());          // Habilitamos que lea json cuando nos llegue por el body

let cardPositions = [];

app.get('/', (req, res) => {
    console.log("Hola");
});


app.post('/', (req, res) => {
    //Leo la posicion que me envia cliente y la guardo en mi array auxiliar cardPositions
    cardPositions.push(req.body);
    console.log(cardPositions);
})


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`); // Muestra un mensaje cuando el servidor empieza a escuchar en el puerto.
});