import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props, {store}) => {
    return (
        <li>
            {props.text}
            <span onClick={props.toggleTodo}>&#10004;</span>
            <span onClick={props.archiveTodo}>&#10008;</span>
        </li>
    )
}

export default TodoItem;
