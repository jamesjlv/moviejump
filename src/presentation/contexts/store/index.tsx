import { createStore, applyMiddleware } from "redux";

import rootReducer from "./modules/rootReducer";
import promise from "redux-promise-middleware";

const store = createStore(rootReducer, applyMiddleware(promise));

export default store;
