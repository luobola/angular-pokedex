import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environments';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonData } from '../model/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL = "";
  private pokedata:PokemonData | any;

  constructor(private http:HttpClient) {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName:string):Observable<PokemonData>{
    this.pokedata = this.http.get<PokemonData>(`${this.baseURL}${pokemonName}`)
    return this.pokedata
  }
}
