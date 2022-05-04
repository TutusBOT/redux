import apiRequest from "../utilities/apiRequest";

export async function getPokemons(offset = 0, limit = 10) {
	try {
		const { data } = await apiRequest(
			`/pokemon?limit=${limit}&offset=${offset}`
		);

		return data;
	} catch (error) {
		return error;
	}
}
