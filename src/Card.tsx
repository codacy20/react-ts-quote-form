import * as React from "react";
import Form from "./form/Form";
import "./styles.scss";

export default function Card() {
  return (
    <div className="card-container">
      <a href="#" className="exit">
        <span className="material-icons">close</span>
      </a>
      <Form />
    </div>
  );
}
