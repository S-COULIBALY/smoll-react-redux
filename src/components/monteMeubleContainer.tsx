import React from "react";
import { connect } from "react-redux";
import monte_meuble from "../images/monte_meuble.png";
import { commanderMonteMeuble } from "../redux/monteMeuble/actionsMonteMeuble";

const MonteMeuble = (props) => {
  console.log("Quanté Monte-meuble: ", props.quantite.quantite);
  return (
    <div className="container">
      <img
        src={monte_meuble}
        alt="monte_meuble"
        height="200 px"
        width="200 px"
      />
      <p>
        Disponibilé:
        <span id="count">{props.quantite.quantite} </span>
      </p>
      <button onClick={() => props.commanderMonteMeuble()}> Commander</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    quantite: state.monteMeuble,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    commanderMonteMeuble: () => dispatch(commanderMonteMeuble()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonteMeuble);
