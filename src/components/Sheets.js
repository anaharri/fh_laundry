import { useEffect, useState } from "react";
import { getLinens } from "../utils/getters.js";

export default function Sheets() {
  const [linens, setLinens] = useState();

  useEffect(() => {
    getLinens(setLinens);
  }, []);
  return (
    <div>
      {linens?.map((u) => (
        <div key={u.id}>
          <h1>Sábanas del departamento #{u.id}</h1>
          <h2>Sábanas: {u.bedsheets}</h2>
          <h2>Toallas: {u.towels}</h2>
        </div>
      ))}
    </div>
  );
}
