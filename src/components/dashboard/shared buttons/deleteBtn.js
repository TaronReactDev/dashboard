import React from 'react';
import Del from "./png/delete.png"

const DeleteBtn = ({text, handleDelete}) => {
  return (
    <button onClick={handleDelete}><img alt={text}   src={Del}/></button>
  );
}

export default DeleteBtn;
