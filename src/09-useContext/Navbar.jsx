import React from "react";
import { Link,  NavLink,  } from "react-router-dom";


export const Navbar = () => {
  return (
    <>
      

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            useContext
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
            <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive === true ? "-active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive === true ? "-active" : ""}`
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive === true ? "-active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
