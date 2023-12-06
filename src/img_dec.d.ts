/*

L'extension .d.ts est utilisée pour indiquer qu'un fichier TypeScript contient des déclarations de types. Ces fichiers sont appelés "fichiers de déclaration" et sont utilisés pour décrire la forme des modules ou des bibliothèques JavaScript existants qui n'ont pas été écrits en TypeScript.
En TypeScript, les fichiers de déclaration (.d.ts) sont des fichiers spéciaux qui contiennent uniquement des informations sur les types sans générer de code JavaScript. Ces fichiers permettent au compilateur TypeScript de comprendre la structure et les types des modules ou des bibliothèques JavaScript externes.
Lorsque vous créez un fichier de déclaration (.d.ts) pour déclarer un module, vous fournissez au compilateur TypeScript les informations nécessaires pour effectuer la vérification statique des types pendant le développement. Cela améliore la qualité du code et aide à détecter les erreurs potentielles plus tôt dans le processus de développement.
Dans le cas spécifique des modules déclaratifs que vous utilisez pour déclarer des types de fichiers d'images (comme .svg ou .png), l'extension .d.ts est simplement une convention pour indiquer que le fichier est destiné à être utilisé pour déclarer des types plutôt que pour générer du code JavaScript réel.

Assurez-vous que ce fichier est inclus dans votre configuration TypeScript (généralement dans le fichier tsconfig.json).

*/




declare module '*.svg' {
    const content: string;
    export default content;
}
  
declare module '*.png' {
    const content: string;
    export default content;
}

