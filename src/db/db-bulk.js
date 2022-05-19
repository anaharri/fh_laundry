import fs from "fs/promises";
import path from "path";
import { URL } from "url";
import { db } from "../firebaseconf.js";
import { doc, setDoc } from "firebase/firestore";

const __dirname = new URL(".", import.meta.url).pathname;
const apartmentAbsolutePath = path.resolve(__dirname, ".", "apartments.json");
/*
//Cargo todos los departamentos en la db
fs.readFile(apartmentAbsolutePath, { encoding: "utf-8" })
  .then((file) => {
    file = JSON.parse(file);

    return Promise.all(
      file.map((element) => {
        setDoc(doc(db, "apartments", JSON.stringify(element.id)), {
          address: `${element.direccion} ${element.unidad}`,
          apartment: element.departamento,
        });
      })
    );
  })
  .then(() => console.log("Apartments loaded"))
  .catch(console.error);

//Cargo todas las sábanas en la db
fs.readFile(apartmentAbsolutePath, { encoding: "utf-8" })
  .then((file) => {
    file = JSON.parse(file);

    return Promise.all(
      data.map((element) => {
        setDoc(doc(db, "linen", JSON.stringify(element.id)), {
          bedsheets: 1,
          towels: 1,
        });
      })
    );
  })
  .then(() => console.log("Linens loaded"))
  .catch(console.error);
*/

//Actualizo los documentos de la colección linen para agregar el atributo status
fs.readFile(apartmentAbsolutePath, { encoding: "utf-8" })
  .then((file) => {
    file = JSON.parse(file);

    return Promise.all(
      file.map((element) => {
        setDoc(
          doc(db, "linen", JSON.stringify(element.id)),
          {
            status: "En uso",
          },
          { merge: true }
        );
      })
    );
  })
  .then(() => console.log("Linen documents updated"))
  .catch(console.error);

/*
//Forma vieja: fs con callbacks (import fs from fs)

//departamentos
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
  
//sábanas
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
*/
