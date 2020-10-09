import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";
import AppsIcon from "@material-ui/icons/Apps";

function Header() {
  return (
    <nav className="header">
      <div className="header__right">
        <ul>
          <li>
            <a href="#">Gmail</a>
          </li>
          <li>
            <a href="#">Images</a>
          </li>
          <li>
            <AppsIcon />
          </li>
          <li>
            <Avatar />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
