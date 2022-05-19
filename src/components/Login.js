import { useState } from "react";

export default function LoginForm() {
  let [inputs, setInputs] = useState({});

  function handleChange(e) {
    setInputs((inputs) =>
      setInputs({ ...inputs, [e.target.name]: e.target.value })
    );
  }

  function handleSubmit(e) {
    //incursionar en autenticación de firebase
    /*
     "Registro" (agregar users a la db)
      addDoc(collection(db, "users"), info)
      .then((doc) => console.log("Document written with ID: ", doc.id))
      .catch((e) => console.error("Error adding document: ", e));
      */
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
        />
      </div>
      <label>Recordarme</label>
      <input type="checkbox" name="rememberme" />
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}
