import React, { useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { withRouter, Link } from "react-router-dom";
import "./Burger.css";

const Burger = ({ props, callbackFromParent }) => {
  useEffect(() => {
    console.log(window.location.href, "hello");
  }, []);
  return (
    <Menu {...props} isOpen={false}>
      <Link className="nav-link" to={"/"}>
        Home
      </Link>

      <Link className="nav-link" to={"/login"}>
        <div>Login</div>
      </Link>

      <Link className="nav-link" to={"./petChoice"}>
        Pets store
      </Link>
      <Link className="nav-link" to={"/about"}>
        About us
      </Link>
      <Link className="nav-link" to={"/contact"}>
        Contact Us
      </Link>
    </Menu>
  );
};
export default withRouter(Burger);
