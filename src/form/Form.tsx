import React, { useState, useEffect } from "react";
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

  async function fetchData() {
    const result = await axios(
      "https://5f59f40eb121580016cadfef.mockapi.io/api/react-ts-quote-form"
    );
    setData(result.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function submit() {
    const postData = async () => {
      const result = await axios({
        method: "post",
        url:
          "https://5f59f40eb121580016cadfef.mockapi.io/api/react-ts-quote-form",
        data: {
          name,
          email,
          ask,
          budget,
          time
        }
      });
    };
    postData();
    setTimeout(() => {
      fetchData();
    }, 1000);
  }

  return (
    <div className="form-container">
      <span>How many people registered? {data?.length} so far!</span>
      <div className="field">
        <label htmlFor="one">Hey, my name is </label>
        <input
          type="text"
          id="one"
          autoComplete="off"
          onFocus={(placeholder = "")}
          placeholder={data[0]?.name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="two">My email address is</label>
        <input
          type="text"
          id="two"
          autoComplete="off"
          placeholder={data[0]?.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="three">I am looking for help with a</label>
        <input
          type="text"
          id="three"
          autoComplete="off"
          placeholder={data[0]?.ask}
          onChange={(e) => setAsk(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="four">My maximum budget is $</label>
        <input
          type="text"
          id="four"
          autoComplete="off"
          placeholder={data[0]?.budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
      </div>
      <div className="field">
        <label htmlFor="five">I need my project within</label>
        <input
          type="text"
          id="five"
          autoComplete="off"
          placeholder={data[0]?.time}
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
