import React from 'react'
import TodoItems from './TodoItems'

export default function Todo(props) {
  return (
    <div className="container">
        <h3 className="my-3">Task list</h3>
        {props.todo.length===0 ? <div className="alert alert-danger" role="alert">
 No task is available.Add task from above form.
</div> :
        props.todo.map((todo)=>{
            return <TodoItems todo = {todo} onDelete = {props.onDelete}/>
}) 
     }
        
    </div>
  )
}
