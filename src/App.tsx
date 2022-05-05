import "./App.css";
import { Provider } from "react-redux";
import store from "./data/store/store";
import { pokemonActions } from "./data/pokemons/pokemonsSlice";
store.dispatch(pokemonActions.fetch(5));
store.dispatch(pokemonActions.fetch(7));

function App() {
	return (
		<>
			<ul>
				<li>note</li>
			</ul>
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
