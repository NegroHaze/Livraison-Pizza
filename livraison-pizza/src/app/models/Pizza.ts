import Ingredient from './ingredients';

export default class Pizza {
    Photo: string;
    Nom: string;
    Prix: string;
    Id: string;
    Ingredients: Ingredient[];

    // constructor(photo: string, nom: string, prix: string, id: string, ingredients: Ingredient[]) {
    //     this.Photo = photo;
    //     this.Nom = nom;
    //     this.Prix = prix;
    //     this.Id = id;
    //     this.Ingredients = ingredients;
    // }

    constructor(values: Object = {}) {

        Object.assign(this, values);
        
        }
}