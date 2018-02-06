import React from "react";
import {connect} from "react-redux";

import "./index.scss";

import ENM from "./../../enums";
import TodoList from "./../TodoList";
import TodoInput from "./../TodoInput";
import TodoFilter from "./../TodoFilter";
import { addTodo } from "./../../actions/todoActions";

class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.addTodoItem = this.addTodoItem.bind(this);
        this.getCurrentFilter = this.getCurrentFilter.bind(this);
    }

    addTodoItem (todo) {
        const todos = this.props.todos;

        // TODO: Generate unique ID for each todo (eg: last 7 characters of md5 hash of current timestamp)
        // get ID of the last todo item
        const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;

        this.props.addTodoItem(lastId + 1, todo);
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
                <TodoInput addTodoItem={this.addTodoItem} />
                <TodoList filterBy={this.getCurrentFilter()} />
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
        addTodoItem: (id, todo) => dispatch(addTodo(id, todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
