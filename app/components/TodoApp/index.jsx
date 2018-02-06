import React from "react";
import {connect} from "react-redux";

import "./index.scss";

import ENM from "./../../enums";
import TodoList from "./../TodoList";
import TodoInput from "./../TodoInput";
import TodoFilter from "./../TodoFilter";
import { addTodo, toggleTodo } from "./../../actions/todoActions";

class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.getCurrentFilter = this.getCurrentFilter.bind(this);
    }

    addTodo (todo) {
        const todos = this.props.todos;

        // TODO: Generate unique ID for each todo (eg: last 7 characters of md5 hash of current timestamp)
        // get ID of the last todo item
        const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;

        this.props.addTodo(lastId + 1, todo);
    }

    toggleTodo (id) {
        this.props.toggleTodo(id);
    }

    getCurrentFilter () {
        if (this.props.filter.activeFilter) {
            return this.props.filter.activeFilter;
        }
        return ENM.STATUS.PENDING;
    }

    // TODO: Don't send "filterBy" props
    render () {
        return (
            <div>
                <TodoInput addTodo={this.addTodo} />
                <TodoList filterBy={this.getCurrentFilter()} toggleTodo={this.toggleTodo} />
                <TodoFilter />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        filter: state.filter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (id, todo) => dispatch(addTodo(id, todo)),
        toggleTodo: (id) => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
