import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseconf.js";

const unitPrice = 400;

// Add a new document with a generated id.
export async function placeOrder({ bags, userId, linens }) {
  const docRef = await addDoc(collection(db, "orders"), {
    bags,
    date: Date(),
    inCharge: `/users/${userId}`,
    linens: linens.map((el) => ({
      apartment_id: el,
      status: "Lavadero - en proceso",
    })),
    price: bags * unitPrice,
    status: "En proceso",
  });
  console.log("Document written with ID: ", docRef.id);
}
