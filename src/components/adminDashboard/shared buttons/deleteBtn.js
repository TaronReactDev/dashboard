import React from 'react';
import Del from "./png/delete.png"

const DeleteBtn = ({text, handleDelete, id,type}) => {
  return (
    <button onClick={()=>handleDelete(id,type)}><img alt={text}   src={Del}/></button>
  );
}

export default DeleteBtn;
