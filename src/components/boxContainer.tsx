import React from "react";
import { connect } from "react-redux";
//import { connect, useDispatch, useSelector } from "react-redux";
import moving_box from "../images/moving_box.png";
import { buyBox } from "../redux/relocations/actionsBox";

const BoxComponent = (props) => {
  //const box = useSelector((state: any) => state.box);
  //const dispatch = useDispatch();
  console.log("Quanté Box: ", props.box.box);
  return (
    <div className="container">
      <img src={moving_box} alt="moving box" height="200 px" width="200 px" />
      <p>
        Disponibilité:
        <span id="count"> {props.box.box} </span>
        {/* <span id="count"> {box} </span> */}
      </p>
      <button onClick={() => props.buyBox()}>
        {/* <button onClick={() => dispatch(buyBox())}> */}
        Achéter
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    box: state.box,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyBox: () => {
      dispatch(buyBox());
    },
  };
};
// export default BoxComponent;  ==> for hooks
export default connect(mapStateToProps, mapDispatchToProps)(BoxComponent);
