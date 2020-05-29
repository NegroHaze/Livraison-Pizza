import { Injectable } from '@angular/core';
import iPizza from '../models/ipizza';
import { HttpClient, HttpResponse } from  '@angular/common/http';
import { Observable } from 'rxjs'
import Ingredient from '../models/ingredients';


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
}


