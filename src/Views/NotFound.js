import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

export default function NotFound() {
  return (
    <p>
      Такой страницы не сущесвтует{" "}
      <NavLink to={routes.home}>ссылка на главную страницу</NavLink>
    </p>
  );
}
