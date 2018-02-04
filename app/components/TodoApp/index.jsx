import React from "react";
import PropTypes from "prop-types";

import "./index.scss";
import TodoList from "./../TodoList";
import TodoInput from "./../TodoInput";
import TodoFilter from "./../TodoFilter";
import { addTodo } from "./../../actions/todoActions";

class TodoApp extends React.Component {
    constructor () {
        super();
        this.addTodoItem = this.addTodoItem.bind(this);
        this.getCurrentFilter = this.getCurrentFilter.bind(this);
    }

    componentDidMount () {
        this.store = this.context.store;
        this.unsubscribe = this.store.subscribe(() => {console.log("sdh");this.forceUpdate()});
    }

    addTodoItem (todo) {
        const { store } = this.context;
        const todos = store.getState().todos;
        // get ID of the last todo item
        const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;

        store.dispatch(addTodo(lastId + 1, todo));
    }

    getCurrentFilter () {
        if (this.store) {
            if (this.store.getState().filter.activeFilter) {
                return this.store.getState().filter.activeFilter;
            }
        }
        return "PENDING";
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

TodoApp.contextTypes = {
    store: PropTypes.object
};

export default TodoApp;
