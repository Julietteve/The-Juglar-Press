import React from "react";
import { Link } from "react-router-dom";
import { Error, NotFoundContainer, NotFoundTxt, Back } from "./styles";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Error>404</Error>
      <NotFoundTxt>Not Found</NotFoundTxt>
      <Link style={{ textDecoration: "none", color: "#282723" }} to="/">
        <Back>Volver al Inicio</Back>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFound;