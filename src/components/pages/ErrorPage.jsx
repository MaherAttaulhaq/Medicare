import { NavLink, useRouteError } from "react-router-dom";
import React from "react";
export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex justify-center items-center">
      <h1>Oops! An error occurred.</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
        <button> Go Home </button>
      </NavLink>
    </div>
  );
};
