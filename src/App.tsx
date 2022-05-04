import { useState } from "react";
import "./App.css";
import NewNoteInput from "./NewNoteInput";
import { Provider } from "react-redux";
import store from "./data/store/store";

function App() {
	return (
		<>
			<NewNoteInput addNote={() => {}} />
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
