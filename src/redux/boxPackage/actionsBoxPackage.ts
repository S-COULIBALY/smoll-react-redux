import { BUY_PACK } from "./types";

export const buyBoxPackage = (quantiteCommande) => {
  return {
    type: BUY_PACK,
    payload: quantiteCommande,
  };
};
