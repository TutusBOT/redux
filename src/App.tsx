import "./App.css";
import { Provider } from "react-redux";
import store from "./data/store/store";
import { pokemonActions } from "./data/pokemons/pokemonsSlice";
store.dispatch(pokemonActions.fetch(5));
store.dispatch(pokemonActions.fetch(7));
setTimeout(() => {
	store.dispatch(pokemonActions.deleteOne("butterfree"));
	console.log(store.getState().rootReducer.pokemons);
}, 3000);

function App() {
	return (
		<>
			{/* <PokemonList pokemonArray={store.getState().rootReducer.pokemons}/> */}
		</>
	);
}

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default AppWrapper;
