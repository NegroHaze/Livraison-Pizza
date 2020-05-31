export default class Ingredient {
    nom: string;
    id: string;

    constructor(nom: string, id?: string) {
        this.nom = nom;
        this.id = id;
    }
}