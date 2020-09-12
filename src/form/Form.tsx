import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Button from "../button/Button";
import axios from "axios";
import "./Form.scss";

export default function Form() {
  // Declare a new state variable, which we'll call "count"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ask, setAsk] = useState("");
  const [budget, setBudget] = useState(0);
  const [time, setTime] = useState(0);
  const [data, setData] = useState([]);
  const [requested, setRequest] = useState(0);

  async function fetchData() {
    const result = await axios(
      "https://5f59f40eb121580016cadfef.mockapi.io/api/QUOTE-FORM"
    );
    setData(result.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function submit() {
    if (requested < 1) {
      const postData = async () => {
        setRequest(1);
        const result = await axios({
          method: "post",
          url: "https://5f59f40eb121580016cadfef.mockapi.io/api/QUOTE-FORM",
          data: {
            name,
            email,
            ask,
            budget,
            time
          }
        }).then(() => {
          setRequest(2);
        });
      };
      postData();
      setTimeout(() => {
        fetchData();
      }, 1000);
    }
  }

  return (
    <div className="form-container">
      <Header />
      <div className="field">
        <label htmlFor="one">Hey, my name is </label>
        <input
          type="text"
          id="one"
          autoComplete="off"
          placeholder="Evan Streich"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="two">My email address is</label>
        <input
          type="email"
          id="two"
          autoComplete="off"
          placeholder="Janae.Rogahn@hotmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="three">I am looking for help with a</label>
        <input
          type="text"
          id="three"
          autoComplete="off"
          placeholder="Web developer"
          onChange={(e) => setAsk(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="four">My maximum budget is $</label>
        <input
          type="text"
          id="four"
          autoComplete="off"
          placeholder="23.18"
          onChange={(e) => setBudget(Number(e.target.value))}
        />
      </div>
      <div className="field">
        <label htmlFor="five">I need my project within</label>
        <input
          type="text"
          id="five"
          autoComplete="off"
          placeholder="33"
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>
      <Button submit={submit} requested={requested} />
      <div>
        <span>How many people registered? {data?.length} so far!</span>
      </div>
    </div>
  );
}
