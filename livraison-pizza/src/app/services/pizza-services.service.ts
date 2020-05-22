import { Injectable } from '@angular/core';
import Pizza from '../models/pizza';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PizzaServicesService {

  pizzas: Pizza[];
  test: any;

  constructor(private  httpClient : HttpClient) { }

  public getPizza(): Observable<Pizza[]>{
    return this.httpClient.get('https://api.ynov.jcatania.io/pizza')
    .map(val => {

      })
  }



}


