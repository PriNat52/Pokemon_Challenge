import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,Subject,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  starterPokemon = [ "Bulbasaur", "Squirtle", "Charmander" ];
  baseUrl = "https://pokeapi.co/api/v2/pokemon";

  private pokemon = new Subject()



  constructor(private http: HttpClient) { }

  getPokemon(name: string){
    const link = [this.baseUrl + name].join('/');
    this.http.get(link)
      .pipe(
        map((pokemonObj: any) =>{
          const pokemonCard = pokemonObj.results.map((data: any) =>{
            return {id: data.id, }
          })
          return pokemonCard
        }),
        tap(() => {

        })
      )
      .subscribe(console.log);
  }
}
