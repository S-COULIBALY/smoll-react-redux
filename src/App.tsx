import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import BoxComponent from "./components/boxContainer";
import MonteMeuble from "./components/monteMeubleContainer";
import BoxPackage from "./components/packageContainer";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <BoxComponent></BoxComponent>
        <MonteMeuble></MonteMeuble>
        <BoxPackage></BoxPackage>
      </div>
    </Provider>
  );
}

export default App;
