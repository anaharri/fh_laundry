import { useState, useEffect } from "react";
import { getLinens, getUsers } from "../utils/getters.js";
import { placeOrder } from "../utils/setters.js";

export default function NewOrder() {
  //el listado de sabanas y users eventualmente debería traerse desde Context
  //y sabanas filtradas por estado, de manera que vengan solo las que no están ya en el lavadero
  const [linen, setLinen] = useState();
  const [users, setUsers] = useState();
  const [order, setOrder] = useState({
    bags: 0,
    linens: [],
    userId: "",
  });

  useEffect(() => {
    getLinens(setLinen);
    getUsers(setUsers);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(order);
    placeOrder(order);
    setOrder({});
  }

  function handleInputChange(e) {
    setOrder((order) => ({
      ...order,
      [e.target.name]: e.target.value,
    }));
  }

  function selectApartments(e) {
    setOrder((order) => ({
      ...order,
      linens: [...order.linens, e.target.value],
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="linens">Seleccione departamentos:</label>
        <select name="linens" id="linens" onChange={selectApartments}>
          <option disabled selected>
            Deptos
          </option>
          {linen?.map((item) => (
            <option value={item.id} key={item.id}>
              {item.id}
            </option>
          ))}
        </select>
        <hr />
        <select name="userId" id="users" onChange={handleInputChange}>
          <option disabled selected>
            Responsable
          </option>
          {users?.map((item) => (
            <option value={item.id} key={item.id}>
              {item.first}
            </option>
          ))}
        </select>
        <hr />
        <label htmlFor="bags">Bultos:</label>
        <input type="text" name="bags" onChange={handleInputChange} />
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
}
