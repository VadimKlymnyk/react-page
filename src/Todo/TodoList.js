import React from 'react'
import TodoItem from './TodoItem'

import '../App.css';


function TodoList(props) {
    return(
        <div className="container_items">
            {
                props.list.map((todo, index)=>{
                    return <
                        TodoItem todo={todo} 
                        key = {todo.id} 
                        index = {index} 
                        onChange = {props.onToggle}
                    />
                })
            }
        </div>
    )
}


export default TodoList