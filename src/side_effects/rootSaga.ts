import { all, fork } from "redux-saga/effects";
import pokemonsSagas from "./pokemons";

const combinedSagas = [fork(pokemonsSagas)];
export default function* rootSaga() {
	yield all(combinedSagas);
}
