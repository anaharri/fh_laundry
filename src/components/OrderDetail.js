import { Link } from "react-router-dom";

export default function OrderDetail() {
  return (
    <>
      <h1>Pedido registrado con exito</h1>
      <Link to={"/list"}>Regresar al listado</Link>
    </>
  );
}
