import React from 'react';
import  Edit from "./png/edit.png"


const EditBtn= ({text,handleViewOrEdit, id, type}) => {
  return (
    <button
      onClick={handleViewOrEdit(id, type)}
    > <img alt={text}   src={Edit} />
    </button>
  );
}

export default EditBtn;
