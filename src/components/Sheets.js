import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllLinens } from "../utils/getters.js";

export default function Sheets() {
  const [linens, setLinens] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getAllLinens(setLinens);
  }, []);

  function clickRedirect() {
    navigate("/orders/new");
  }
  return (
    <div>
      <button onClick={clickRedirect}>Registrar nuevo pedido</button>
      <h1>Sábanas:</h1>
      {linens
        ?.map((u) => ({ ...u, id: Number(u.id) }))
        .sort((a, b) => a.id - b.id)
        .map((u) => (
          <div key={u.id}>
            <h2>
              Sábanas del departamento #{u.id} <span>{u.status}</span>
            </h2>
            <hr />
          </div>
        ))}
    </div>
  );
}
