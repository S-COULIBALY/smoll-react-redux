import boxReducer from "./relocations/boxReducer";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import monteMeubleReducer from "./monteMeuble/monteMeubleReducer";
import boxPackageReducer from "./boxPackage/BoxPackageReducer";

const rootReducer = combineReducers({
  box: boxReducer,
  monteMeuble: monteMeubleReducer,
  boxPackage: boxPackageReducer,
});

//const composeEnhancers = (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;
//export const store = createStore(boxReducer, composeEnhancers());

export const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());
