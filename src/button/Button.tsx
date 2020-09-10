import React, { useState, useEffect } from "react";
import "./Button.scss";

export default function Button(props: any) {
  if (props.requested === 1)
    return <button onClick={props.submit}>Sending...</button>;
  else if (props.requested === 2)
    return (
      <button className="sent" onClick={props.submit}>
        Sent
      </button>
    );
  else return <button onClick={props.submit}>Submit</button>;
}
