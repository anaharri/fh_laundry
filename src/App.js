import "./App.css";
import { db } from "./firebaseconf";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

function App() {
  const [info, setInfo] = useState({});

  function handleChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    addDoc(collection(db, "users"), info)
      .then((doc) => console.log("Document written with ID: ", doc.id))
      .catch((e) => console.error("Error adding document: ", e));
  }

  return (
    <div className="App">
      <h1>Hola mundo</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First name:</label>
        <input
          type="text"
          name="first"
          value={info.first}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="last">Last name:</label>
        <input
          type="text"
          name="last"
          value={info.last}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
