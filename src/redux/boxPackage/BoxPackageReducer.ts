import { BUY_PACK } from "./types";

const initialStatePack = {
  nom: "ECONOMIQUE",
  nbreDePack: 19,
  disponibilite: true,
  version: "nouveau",
};

const boxPackageReducer = (state = initialStatePack, action) => {
  switch (action.type) {
    case BUY_PACK:
      return {
        ...state,
        nbreDePack: state.nbreDePack - action.payload,
      };

    default:
      return state;
  }
};

export default boxPackageReducer;
