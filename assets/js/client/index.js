import { uiDesk } from "./CardsGenerator/uiDesk.js";
import { uiHollows } from "./CardsGenerator/uiHollows.js";

uiDesk.init();

uiDesk.fillDesk("english")
uiDesk.generateDesk();

//Generamos los huecos(hollows) de las cartas
uiHollows.init();
uiHollows.fill("english");
uiHollows.generateHollows();