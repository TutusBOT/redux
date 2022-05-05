import axios, { AxiosError } from "axios";
import { ApiList } from "../models/ApiList";
import { PokemonsListResponse } from "../models/PokemonsListResponse";
import apiRequest from "../utilities/apiRequest";

export async function getPokemons(offset = 0, limit = 10) {
	try {
		const { data } = await apiRequest.get<ApiList<PokemonsListResponse>>(
			`/pokemon?limit=${limit}&offset=${offset}`
		);

		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) return error.response?.data;
		return "Failed to fetch data.";
	}
}
