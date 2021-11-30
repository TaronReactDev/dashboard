import React from 'react';
import  Edit from "./png/edit.png"


const EditBtn= ({text,handleViewOrEdit}) => {
  return (
    <button
      onClick={handleViewOrEdit}
    > <img alt={text}   src={Edit} />
    </button>
  );
}

export default EditBtn;
