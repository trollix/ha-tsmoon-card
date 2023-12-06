// Définition de la classe
export class Personne {
    // Propriétés de la classe
    nom: string;
    age: number;
  
    // Constructeur de la classe
    constructor(nom: string, age: number) {
      this.nom = nom;
      this.age = age;
    }
  
    // Méthode de la classe
    afficherInformations(): void {
      console.log(`Nom: ${this.nom}, Age: ${this.age}`);
    }
  }
  

  