import React from "react";
import { styles } from "ansi-colors";

const Grocery = ({ id, name, complete, handleClick }) => (
  <li
    key={id}
    style={ complete ? {...styles.grocery, ...styles.complete} : styles.handleClick }
    onClick={() => handleClick(id)}
  >
    {name}
  </li>
);


// const styles={
//   grocery: {cursor: "pointer"},
//   complete: { color: "gray", textDecoration: "line-through"}
// };

export default Grocery;