import { COMMANDER_MONTE_MEUBLE } from "./types";

const initialStateMonteMeunble = {
  quantite: 12,
};

function monteMeubleReducer(state = initialStateMonteMeunble, action) {
  switch (action.type) {
    case COMMANDER_MONTE_MEUBLE:
      return {
        ...state,
        quantite: state.quantite - 1,
      };

    default:
      return state;
  }
}

export default monteMeubleReducer;
