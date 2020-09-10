import React, { useState, useEffect } from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header-container">
      <img src="https://assets.website-files.com/5cbc1cadfad96c3229989372/5d1b1fb7bc10243b51441d27_icon_form.svg" />
      <span>Let's start a conversation.</span>
    </div>
  );
}
