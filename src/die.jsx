import React from "react";

const die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return <button style={styles}>{props.value}</button>;
};

export default die;
