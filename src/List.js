import React from "react"
import Grocery from "./Grocery"

const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      { props.items.map( item => <Grocery {...item} handleClick={props.handleClick} /> )}
    </ul>
  </div>
);


export default List;