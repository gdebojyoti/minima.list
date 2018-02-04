import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./index.scss";
import TodoList from "./../TodoList";
import TodoInput from "./../TodoInput";
import * as todoActions from "./../../actions/todoActions";

class TodoApp extends React.Component {
    constructor () {
        super();
        this.addTodoItem = this.addTodoItem.bind(this);
    }

    addTodoItem (todo) {
        const { store } = this.context;
        const currentTodos = store.getState().todoReducer;
        let lastId = currentTodos.length > 0 ? currentTodos[currentTodos.length - 1].id : 0;

        this.props.todoActions.addTodo(lastId + 1, todo);
    }

    render () {
        const { store } = this.context;
        return (
            <div>
                <TodoInput addTodoItem={this.addTodoItem} />
                <TodoList />
            </div>
        )
    }
}

TodoApp.contextTypes = {
    store: PropTypes.object
};

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(todoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
