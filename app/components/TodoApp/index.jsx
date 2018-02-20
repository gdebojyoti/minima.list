import React from "react";
import {connect} from "react-redux";

import "./../../styles/global.scss";
import "./index.scss";

import ENM from "./../../enums";
import Hello from "./../Hello";
import TodoLists from "./../TodoLists";
import TodoInput from "./../TodoInput";
import TodoFilter from "./../TodoFilter";
import { addTodo } from "./../../actions/todoActions";

class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo (todo) {
        const todos = this.props.todos;

        // TODO: Generate unique ID for each todo (eg: last 7 characters of md5 hash of current timestamp)
        // get ID of the last todo item
        const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;

        this.props.addTodo(lastId + 1, todo);
    }

    render () {
        return (
            <div className="todo-app">
                <Hello />
                <TodoLists />
                <TodoFilter />
                <TodoInput addTodo={this.addTodo} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (id, todo) => dispatch(addTodo(id, todo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
