import React, { useState } from "react";
import { dbService } from "fbase";

const Ntwitt = ({ JHtwittObj, isOwner}) =>{ 
  const [Editing, setEditing] = useState(false);
  const [Newtwitt, setNewtwitt] = useState(JHtwittObj.text);
  const onDeleteClick = async() => {
    const ok = window.confirm("Are you sure?");
    if(ok){
      await dbService.doc(`JHtwitts/${JHtwittObj.id}`).delete();
    }
  };
  const toggleEditing =() => setEditing((prev) => !prev);
  return(
  <div>
    {Editing ? (
      <>
      <form>
        <input 
        type ="text" 
        placeholder="Edit this" 
        value = {Newtwitt} 
        required 
        />
      </form>
      <button onClick ={toggleEditing}>Cancel</button>
      </>
    ) : (
      <>
        <h4>{JHtwittObj.text}</h4>
        {isOwner && (
          <>
          <button onClick={onDeleteClick}>Delete Twitt</button>
          <button onClick={toggleEditing}>Edit Twitt</button>
          </>
        )}
      </>
     )}
  </div>
  );
};

export default Ntwitt;