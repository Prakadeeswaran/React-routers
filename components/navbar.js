import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  console.log(props.navList);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav  mr-auto">
          {props.navList.map(nav => {
            let retVal = `/${nav.value}/${nav.varity}`;
            return (
              <li className="nav-item  mr-auto">
                <Link to={retVal}> {nav.value} </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
