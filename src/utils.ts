import { version, name } from '../package.json'

export const printVersion = () => console.info(
    `%c  ${name.toUpperCase()}  %c  Version ${version}  `,
    'color: white; font-weight: bold; background: crimson',
    'color: #000; font-weight: bold; background: #ddd',
);


