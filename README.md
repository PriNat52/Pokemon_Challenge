# Pokemon Challenge
Build a web page that allows a user to choose one of three pokemon, “Bulbasaur”, “Squirtle”, or 
“Charmander.” 
const starterPokemon = [ "Bulbasaur", "Squirtle", "Charmander" ]
The web page should allow the user to see the name of the pokemon beneath the sprite of the 
pokemon as well as the ID, weight, height, and types.

Look here for an example:
https://miro.medium.com/max/5756/1*LvC-N5iv5YTeoZ5DF_QPpA.png
(common: SVG pictures)

The card (or name) should be selectable and upon selection, a confirmation should ask the user
if they are sure they want to select the chosen pokemon as their pokemon. On a success, the 
other pokemon should be removed from the DOM and the selected pokemon should be 
centered.

## Requirements
1.  Use the pokemon service to retrieve data for the three pokemon in the starterPokemon 
array in pokemon.component. The getPokemon function from the pokemon service will need 
to be refactored to take a pokemon and retrieve the data for it.
2.  The data needs to be shown on a card and the cards need to look good on any viewport. 
Vertical on mobile and horizontal on desktop. (common: reactive page)
3.  Use the data provided in the pokemonService. 
(https://pokeapi.co/api/v2/pokemon/pikachu)
An interface with the data structure can be found in pokemon.interface.ts.
(
export interface PokemonResponse {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indicies: any[];
  height: number;
  held_items: Item[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  species: Specie;
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
  weight: number;
}
export interface Ability {
  name: any;
  is_hidden: boolean;
  slot: number;
}
export interface Form {
  name: string;
  url: string;
}
export interface Item {
  item: any;
  vesion_details: any[];
}
export interface Move {
  move: {
    name: string;
    url: string;
  }
}
export interface Specie {
  name: string;
  url: string;
}
export interface Sprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: string;
    'offical-artwork': {
      front_default: string;
    }
  };
  versions: any;
}
export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}
export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}
)
4.  The component logic should be strongly typed.
5.  Unit tests should test the functionality of the component.
6.  Refactor the application to use best practices to ensure maintainability and extensibility
