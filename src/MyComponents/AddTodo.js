import React from 'react'
import { useState } from 'react';

export default function AddTodo({addTodo}) {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e)=>{
      e.preventDefault();
      if(!title || !desc){
        alert("Title and description can't be empty ");
        console.log(desc)
      }
      else{
      addTodo(title,desc);
      setTitle("");
      setDesc("");
      }
  }

  return (
    <form onSubmit={submit} className='container my-5'>
        <h4 className='my-3'>Add your task</h4>
  <div className="row mb-3">
    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
    <div className="col-sm-10">
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
      <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}  className="form-control" id="inputPassword3"/>
    </div>
  </div>
  
  
  <button type="submit" className="btn btn-success btn-sm my-3">Add Task</button>
</form>
  )
}