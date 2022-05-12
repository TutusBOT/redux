import pokemonsSlice, {
	pokemonActions,
	initialState,
} from "../pokemons/pokemonsSlice";

describe("pokemons reducer", () => {
	it("should create all actions", () => {
		expect(Object.prototype.hasOwnProperty.call(pokemonActions, "fetch")).toBe(
			true
		);
	});
});
