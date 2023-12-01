import { TSMoonCard } from "./custom-element/tsmoon-card";
import { printVersionToConsole } from "./utils";

// 
printVersionToConsole();

// Registering card
customElements.define("tsmoon-card", TSMoonCard);

