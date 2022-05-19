import { db } from "../firebaseconf.js";
import { collection, getDocs, query, where } from "firebase/firestore";

// Traer usuarios
export async function getUsers(setState) {
  const q = query(collection(db, "users"));
  const users = await getDocs(q);
  const array = users.docs.map((snap) => ({ ...snap.data(), id: snap.id }));
  setState(() => array);
}

//Traer sábanas y toallas
export async function getLinens(setState) {
  const q = query(
    collection(db, "linen"),
    where("status", "not-in", ["Lavadero - en proceso", "Lavadero - listo"])
  );
  const linens = await getDocs(q);
  const array = linens.docs.map((snap) => ({ ...snap.data(), id: snap.id }));
  setState(() => array);
}
