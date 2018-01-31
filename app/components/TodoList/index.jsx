import React from "react";
import TodoItem from "./../TodoItem";

const TodoList = props => (
    <ul>
        {props.todos.map(
            todo => <TodoItem text={todo.todo} key={todo.id} />
        )}
    </ul>
);

export default TodoList;
