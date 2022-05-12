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
    addDoc(collection(db, "users"), info)
      .then((doc) => {
          //redirigir a login con useNavigate
          console.log("Document written with ID: ", doc.id)
        })
      .catch((e) => console.error("Error adding document: ", e));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          name="first"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Apellido"
          name="last"
          onChange={handleChange}
        />
      </div>
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
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}
