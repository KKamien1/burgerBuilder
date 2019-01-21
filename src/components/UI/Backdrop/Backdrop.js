import React from "react";

import classes from "./Backdrop.css";

const Backdrop = props => {
  console.log(" Backdrop", props);
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clickedBackdrop} />
  ) : null;
};

export default Backdrop;
