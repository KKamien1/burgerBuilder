import React from "react";
import classes from "./SideDrawer.css";

import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { Aux } from "../../../hoc/Aux";

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer];
  attachedClasses.push(props.open ? classes.Open : classes.Close);

  return (
    <Aux>
      <Backdrop show={props.open} clickedBackdrop={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
