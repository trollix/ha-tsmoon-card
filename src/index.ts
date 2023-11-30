import { MyCustomCard } from "./custom-element/my-custom-card";
import { printVersionToConsole } from "./utils";

// Registering card
customElements.define("my-custom-card", MyCustomCard);

// 
printVersionToConsole();