import Ingredient from './ingredients';

export default interface IUser {
    photo: string;
    nom: string;
    prix: number;
    id: string;
    ingredients: Ingredient[];
}