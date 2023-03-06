import React from "react";
import "./app.css";
import "./sass/index.scss";
import data from "./data.toml";
import dataInJsonFormat from "./data.json";

export default function () {
  return (
    <>
      <div>
        <h2>Welcome to react</h2>
      </div>
      <div className="footer">
        <p>
          Developed by <span className="text-pink">{data.name}</span>
        </p>
      </div>
    </>
  );
}
