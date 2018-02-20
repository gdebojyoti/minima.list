import React from "react";

const TodoItem = props => {
    let styles = {
        listStyle: "none"
    }
    return (
        <li style={styles}>
            <input onClick={props.toggleTodo} type="checkbox" />
            &nbsp;
            {props.text}
            {/*<span>&#10004;</span>
            <span onClick={props.archiveTodo}>&#10008;</span>*/}
        </li>
    )
}

export default TodoItem;
