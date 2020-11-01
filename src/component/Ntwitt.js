import React from "react";

const Ntwitt = ({ JHtwittObj, isOwner}) =>{ 
  const onDeleteClick = () => {
    const ok = window.confirm("Are you suer you want to delete this?");
    if(ok){
      //delete twitt
      
    }
  }
  return(
      <div>
      <h4>{JHtwittObj.text}</h4>
    {isOwner && (
    <>
    <button>Delete Twitt</button>
      <button>Edit Twitt</button>
      </>
      )}
    </div>
  );
};
export default Ntwitt;