import { MyCustomCard } from "./custom-element/my-custom-card";
import { printVersion } from "./utils";

import { version, name } from '../package.json'

console.info(
  `%c  ${name.toUpperCase()}  %c  Version ${version}  `,
    'color: white; font-weight: bold; background: crimson',
    'color: #000; font-weight: bold; background: #ddd',
);


// Registering card
customElements.define("my-custom-card", MyCustomCard);

printVersion();