import { TSMoonCard } from "./tsmoon-card";
import { version, name } from '../package.json'

export const printVersionToConsole = () => console.info(
    `%c  ${name.toUpperCase()}  %c  Version ${version}  `,
    'color: white; font-weight: bold; background: crimson',
    'color: #000; font-weight: bold; background: #ddd',
);


// Registering card
customElements.define("tsmoon-card", TSMoonCard);

