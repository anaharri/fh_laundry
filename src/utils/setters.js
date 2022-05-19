import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseconf.js";

const unitPrice = 400;

function updateSheetStatus(id, status) {
  setDoc(doc(db, "linen", id), { status }, { merge: true });
}

// Add a new document with a generated id.
export async function placeOrder({ bags, userId, linens }) {
  const docRef = await addDoc(collection(db, "orders"), {
    bags,
    date: Date().slice(0, 21),
    inCharge: doc(db, `/users/${userId}`),
    linens: linens.map((el) => {
      updateSheetStatus(el, "Lavadero - en proceso");

      return doc(db, `linen/${el}`);
    }),
    price: bags * unitPrice,
    status: "En proceso",
  });
  console.log("Document written with ID: ", docRef.id);
}
