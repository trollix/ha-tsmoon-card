import { MyCustomCard } from "./custom-element/my-custom-card";
import { printVersion } from "./utils";

// Registering card
customElements.define("my-custom-card", MyCustomCard);

printVersion();