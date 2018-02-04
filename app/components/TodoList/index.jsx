import React from "react";
import TodoItem from "./../TodoItem";
import PropTypes from "prop-types";

class TodoList extends React.Component {
    constructor () {
        super();
    }

    componentDidMount () {
        this.store = this.context.store;
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    render() {
        if (this.store) {
                return (
                    <ul>
                        {this.store.getState().todoReducer.map(
                            todo => <TodoItem text={todo.text} key={todo.id} />
                        )}
                    </ul>
                )
        } else {
            return (
                <ul>
                    <span>No task to display</span>
                </ul>
            )
        }
    }
}

TodoList.contextTypes = {
    store: PropTypes.object
};

export default TodoList;
