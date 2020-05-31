export default class Pizza {
    photo: string;
    nom: string;
    prix: number;
    id: string;
    ingredients: string[];

    constructor(photo: string, nom: string, prix: number, ingredients: string[], id?: string) {
        this.photo = photo;
        this.nom = nom;
        this.prix = prix;
        this.ingredients = ingredients;
        this.id = id;
    }   
}