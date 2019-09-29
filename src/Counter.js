import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log("render =>", props);

  return (
    <div>
      <h1>Mesin Penghitung</h1>
      <p>Count : {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
      <button onClick={props.onDecrementClick}>Increment</button>
    </div>
  );
}

function mapStatetoProps(state) {
  console.log("mapStatetoProps", state);
  return {
    count: state.count
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    onIncrementClick: () => {
      console.log("tombol increment di clisk");
      const action = {type:'INCREMENT'};
      dispatch(action);
    },
    onDecrementClick: () => {
        console.log("tombol decrement di clisk");
        const action = {type:'DECREMENT'};
        dispatch(action);
      }
  };
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);
