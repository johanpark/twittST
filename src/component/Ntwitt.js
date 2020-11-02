import React, { useState } from "react";
import { dbService } from "fbase";

const Ntwitt = ({ JHtwittObj, isOwner}) =>{ 
  const [Editing, setEditing] = useState(false); //editing mode or not
  const [Newtwitt, setNewtwitt] = useState(JHtwittObj.text); //Update input  text
  const onDeleteClick = async() => {
    const ok = window.confirm("Are you sure?");
    if(ok){
      await dbService.doc(`JHtwitts/${JHtwittObj.id}`).delete();
    }
  };
  const toggleEditing =() => setEditing((prev) => !prev);
  const onSubmit = async(event) => {
    event.preventDefault();
    console.log(JHtwittObj, Newtwitt);
    await dbService.doc(`JHtwitts/${JHtwittObj.id}`).update({
      text: Newtwitt,
    });
    setEditing(false);
  }
  const onChange =(event) => {
    const {
      target : {value},
    } =event;
    setNewtwitt(value);
  };
  return(
  <div>
    {Editing ? (
      <>
      <form onSubmit ={onSubmit}>
        <input 
        type ="text" 
        placeholder="Edit this" 
        value = {Newtwitt} 
        required 
        onChange ={onChange}
        />
        <input 
        type ="submit"
        value ="Update twitt" 
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