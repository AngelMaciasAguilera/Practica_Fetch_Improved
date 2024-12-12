import { uiDesk } from "./CardsGenerator/uiDesk.js";
import { uiHollows } from "./CardsGenerator/uiHollows.js";

//inicializamos la baraja
uiDesk.init();
//Especificamos de que tipo va a ser y se rellena con lo especificado
uiDesk.fillDesk("english")

//generamos los elementos en el html
uiDesk.generateDesk();

//Inicializamos los huecos donde se van a insertar los huecos
uiHollows.init();
//Decimos de que tipo seran los huecos y se rellena con lo especificado
uiHollows.fill("english");
//Generamos los elementos en el html
uiHollows.generateHollows();