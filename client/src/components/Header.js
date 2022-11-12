import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

export default function Header(props) {
  console.log(props.logOutButton);
  return (
    <div>
      <AppBar position="static">
        <Toolbar
          className="Negative"
          style={{ justifyContent: "space-evenly" }}
        >
          <Link to="/" className="Negative" style={{ textDecoration: "none" }}>
            <h3>World's Collective</h3>
          </Link>
          <Link className="App-link" to="/home">
            Home
          </Link>
          <Link className="App-link" to="/about">
            About
          </Link>
          <Link className="App-link" to="/events">
            Events
          </Link>
          <Link className="App-link" to="/merch">
            Merch
          </Link>
          <div id="signInDiv"></div>
          <>{props.logOutButton}</>
        </Toolbar>
      </AppBar>
    </div>
  );
}
