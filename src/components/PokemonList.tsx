import React from "react";
import { PokemonsListResponse } from "../models/PokemonsListResponse";
import Pokemon from "./pokemon";
// import Pokemon from './Pokemon'

function PokemonList(pokemonArray: PokemonsListResponse[]) {
	return (
		<>
			{pokemonArray.map((pokemon, index) => {
				return <Pokemon key={pokemon.name} name={pokemon.name} />;
			})}
		</>
	);
}

export default PokemonList;
