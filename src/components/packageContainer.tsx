import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import box_package from "../images/box_package.png";
import { buyBoxPackage } from "../redux/boxPackage/actionsBoxPackage";

export interface IPaquet {
  nom?: string;
  quantite?: number;
  dispo?: boolean;
  comment?: string;
}

const BoxPackage = () => {
  const nbreDePack = useSelector((state: any) => state.boxPackage.nbreDePack);
  const dispatch = useDispatch();
  console.log("Quanté pack: ", nbreDePack);

  const [totalPack, setTotalPack] = useState(12);
  console.log("totalPack", totalPack);

  /* const valeur = (e) => {
    //console.log(e.target.value);
    return setTotalPack(e.target.value);
  }; */

  return (
    <div className="container">
      <img src={box_package} alt="Box package" width="200" height="200" />
      <p>
        Disponibilité:
        <span id="count"> {nbreDePack} </span>
      </p>
      <div className="btnContainer">
        <button
          onClick={() => {
            dispatch(buyBoxPackage(totalPack));
          }}
        >
          Achéter
        </button>
        {/*<input type="text" name="name" value={totalPack} onChange={valeur} /> */}
        <input
          type="text"
          name="name"
          value={totalPack}
          //onChange={(e) => setTotalPack(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BoxPackage;
