import { TSMoonCard } from "./custom-element/tsmoon-card";
import { printVersionToConsole } from "./utils";

// Registering card
customElements.define("tsmoon-card", TSMoonCard);

// 
printVersionToConsole();