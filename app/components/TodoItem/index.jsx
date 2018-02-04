import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props, {store}) => {
    return (
        <li>{props.text}</li>
    )
}

export default TodoItem;
