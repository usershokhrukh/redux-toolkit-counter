import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "./reducer/CounterReducer";
import "../src/App.css";
const App = () => {
  const {count} = useSelector((state) => state?.counter);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="box">
      <h2>{count}</h2>
      <div className="box_center">
        <button onClick={(e) => dispatch(increment())}>+</button>
        <button onClick={(e) => dispatch(decrement())}>-</button>
        <button onClick={(e) => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
};

export default App;
