import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../../side_effects/rootSaga";
import { rootReducer } from "../rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: { rootReducer },
	middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
