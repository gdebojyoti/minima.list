import React from "react";

const TodoItem = props => {
    return (
        <li>
            {props.text}
            <span onClick={props.toggleTodo}>&#10004;</span>
            <span onClick={props.archiveTodo}>&#10008;</span>
        </li>
    )
}

export default TodoItem;
