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
    <div>
      <span>How many people registered? {data.length} so far!</span>
      <div>
        <label htmlFor="one">name</label>
        <input type="text" id="one" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="two">email</label>
        <input
          type="text"
          id="two"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="three">ask</label>
        <input
          type="text"
          id="three"
          onChange={(e) => setAsk(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="four">budget</label>
        <input
          type="text"
          id="four"
          onChange={(e) => setBudget(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="five">time</label>
        <input
          type="text"
          id="five"
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
