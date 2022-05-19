import React from "react";
import { Link /*useNavigate*/ } from "react-router-dom";

export default function Landing() {
  //   const navigate = useNavigate();
  return (
    <Link to="/list">
      <h1>Landing page</h1>
    </Link>
  );
}
