import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pikachu from "./Pikachu/Pikachu";

const jsx = (
  <div className="container">
    <Pikachu />
  </div>
);
ReactDOM.render(jsx, document.getElementById("root"));
