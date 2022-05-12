import { ApiList } from "../../models/ApiList";
import { PokemonsListResponse } from "../../models/PokemonsListResponse";
import pokemonsSlice, {
	pokemonActions,
	initialState,
} from "../pokemons/pokemonsSlice";

const mockData: ApiList<PokemonsListResponse> = {
	count: 0,
	next: "",
	previous: "",
	results: [{ name: "name", url: "url" }],
};

describe("pokemons reducer", () => {
	it("should create all actions", () => {
		expect(Object.prototype.hasOwnProperty.call(pokemonActions, "fetch")).toBe(
			true
		);
		expect(
			Object.prototype.hasOwnProperty.call(pokemonActions, "fetchSuccess")
		).toBe(true);
		expect(
			Object.prototype.hasOwnProperty.call(pokemonActions, "fetchFailure")
		).toBe(true);
		expect(
			Object.prototype.hasOwnProperty.call(pokemonActions, "deleteAll")
		).toBe(true);
		expect(
			Object.prototype.hasOwnProperty.call(pokemonActions, "deleteOne")
		).toBe(true);
	});

	test("if fetchSuccess action gives correct response", () => {
		expect(
			pokemonsSlice(initialState, pokemonActions.fetchSuccess(mockData))
		).toEqual({
			...initialState,
			offset: 1,
			data: [{ name: "name", url: "url" }],
		});
	});

	test("if deleteAll action properly deletes all pokemons", () => {
		pokemonsSlice(initialState, pokemonActions.fetchSuccess(mockData));
		expect(pokemonsSlice(initialState, pokemonActions.deleteAll())).toEqual({
			...initialState,
		});
	});
});
