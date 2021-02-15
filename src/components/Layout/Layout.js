import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./layout.module.css";
const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
