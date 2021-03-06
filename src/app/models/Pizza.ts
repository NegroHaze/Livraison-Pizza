import Ingredient from './ingredients';

export default class Pizza {
    photo: string;
    nom: string;
    prix: number;
    id: string;
    ingredients: Ingredient[];

    constructor(photo: string, nom: string, prix: number, ingredients: Ingredient[], id?: string) {
        this.photo = photo;
        this.nom = nom;
        this.prix = prix;
        this.ingredients = ingredients;
        this.id = id;
    }   
}