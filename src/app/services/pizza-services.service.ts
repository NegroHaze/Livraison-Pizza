import { Injectable } from '@angular/core';
import iPizza from '../models/ipizza';
import { HttpClient, HttpResponse, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs'
import Ingredient from '../models/ingredients';
import Pizza from '../models/Pizza';
import PizzaForSend from '../models/PizzaForSend';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})


export class PizzaServicesService {
  
  constructor(private  httpClient : HttpClient) { }

  pizzas: iPizza[];
  // public getPizza(): Observable<Pizza[]>{
  //   return this.httpClient.get('https://api.ynov.jcatania.io/pizza').pipe()
  // }

  getPizza(): Observable<HttpResponse<iPizza[]>>{
    return this.httpClient.get<iPizza[]>('https://api.ynov.jcatania.io/pizza', {observe: 'response'})
  }

  getIngredient(): Observable<HttpResponse<Ingredient[]>>{
    return this.httpClient.get<Ingredient[]>('https://api.ynov.jcatania.io/ingredient', {observe: 'response'})
  }

  postPizza(pizzaToSend: PizzaForSend): Observable<PizzaForSend>{
    return this.httpClient.post<PizzaForSend>('https://api.ynov.jcatania.io/pizza', pizzaToSend, httpOptions);
  }

  postIngredient(ingredientToSend: Ingredient): Observable<Ingredient>{
    return this.httpClient.post<Ingredient>('https://api.ynov.jcatania.io/ingredient', ingredientToSend, httpOptions);
  }

  updateHero (pizzaToUpdate: Pizza): Observable<Pizza> {
    return this.httpClient.put<Pizza>('https://api.ynov.jcatania.io/pizza', pizzaToUpdate, httpOptions)
  }

  deletePizza(pizzaID: string): Observable<{}>{
    console.log('id: ' + pizzaID)
    const url = `https://api.ynov.jcatania.io/pizza/${pizzaID}`;
    return this.httpClient.delete(url, httpOptions);
  }

  deleteIngredient(ingredientID: string): Observable<{}>{
    const url = `https://api.ynov.jcatania.io/ingredient/${ingredientID}`;
    return this.httpClient.delete(url, httpOptions);
  }

}


