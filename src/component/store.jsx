import { createStore } from "redux";
import { reducerIncrement } from "./reducer";
export const store = createStore(reducerIncrement);
