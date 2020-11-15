import { BUY_BOX } from "./types";
const initialStateBox = {
  box: 22,
};

const boxReducer = (state = initialStateBox, action: any) => {
  switch (action.type) {
    case BUY_BOX:
      return {
        ...state,
        box: state.box - 1,
      };

    default:
      return state;
  }
};

export default boxReducer;
