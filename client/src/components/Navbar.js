import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const Logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    navigate("/auth");
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/createrecipe">Create-Recipe</Link>

        {!cookies.access_token ? (
          <Link to="/auth">Login/Register</Link>
        ) : (
          <>
            <Link to="/savedrecipe">Saved-Recipe</Link>
            <button onClick={Logout}>Logout</button>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
