import fs from "fs";
import { db } from "../firebaseconf.js";
import { doc, setDoc } from "firebase/firestore";

//Cargo todos los departamentos en la db
fs.readFile("./apartments.json", "utf-8", (err, data) => {
  data = JSON.parse(data);

  Promise.all(
    data.map((element) => {
      setDoc(doc(db, "apartments", JSON.stringify(element.id)), {
        address: `${element.direccion} ${element.unidad}`,
        apartment: element.departamento,
      });
    })
  )
    .then(() => console.log("Apartments loaded"))
    .catch((e) => console.error(e));
});

//Cargo todas las sábanas en la db
fs.readFile("./apartments.json", "utf-8", (err, data) => {
  data = JSON.parse(data);

  Promise.all(
    data.map((element) => {
      setDoc(doc(db, "linen", JSON.stringify(element.id)), {
        bedsheets: 1,
        towels: 1,
      });
    })
  )
    .then(() => console.log("Linens loaded"))
    .catch(() => console.error(err));
});
