import { db } from "../firebaseconf.js";
import { collection, getDocs, query } from "firebase/firestore";

// Traer usuarios
export async function getUsers(setState) {
  let array = [];
  const q = query(collection(db, "users"));
  const users = await getDocs(q);

  users.forEach((snap) => {
    array.push({ ...snap.data(), id: snap.id });
  });
  setState(() => array);
}

//Traer sábanas y toallas
export async function getLinens(setState) {
  let array = [];
  const q = query(collection(db, "linen"));
  const linens = await getDocs(q);

  linens.forEach((snap) => {
    array.push({ ...snap.data(), id: snap.id });
  });
  setState(() => array);
}
