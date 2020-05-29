import Ingredient from './ingredients';
import { PizzaServicesService } from '../services/pizza-services.service';

export default class Pizza {
    Photo: string;
    Nom: string;
    Prix: number;
    Id: string;
    Ingredients: Ingredient[];

    constructor(photo: string, nom: string, prix: number, id: string, ingredients: Ingredient[]) {
        this.Photo = photo;
        this.Nom = nom;
        this.Prix = prix;
        this.Id = id;
        this.Ingredients = ingredients;
    }
}