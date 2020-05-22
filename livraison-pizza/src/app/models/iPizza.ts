import Ingredient from './ingredients';

export default interface IUser {
    photo: string;
    nom: string;
    prix: string;
    id: string;
    ingredients: Ingredient[];
}