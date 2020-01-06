import React from 'react'

import '../App.css';

function TodoItem({ todo, index, onChange }) {
    const classes = []

    

    if (todo.completed) {
        
        classes.push('done')
    }
    
    return (
            
        <div className="container_item">
            <span  className={classes.join(' ')}>
                <img className="container_item_img" src={todo.img} alt="" />
                <div className="container_item_txt">
                    <div className="container_item_title">{todo.title}</div>
                    <div className="container_item_text">{todo.text}</div>
                    <div className="container_item_time">{todo.time}</div>
                </div>
            </span>
            <label className="container_check">
                <input
                    className="container_item_check"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                    id = {todo.id}
                />
                <span className="checkmark" ></span>
                <div className="container_item_btn_text">Посмотрел</div>

            </label>

        </div >

    )
}


export default TodoItem