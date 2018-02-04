import React from "react";
import TodoItem from "./../TodoItem";
import PropTypes from "prop-types";

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.generateTodoItems = this.generateTodoItems.bind(this);
    }

    componentDidMount () {
        this.store = this.context.store;
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    generateTodoItems () {
        if (this.store) {
            let todos = this.store.getState().todos.filter(todo => todo.status === this.props.filterBy);
            if (todos.length > 0) {
                return (
                    todos.map(
                        todo => <TodoItem text={todo.text} key={todo.id} />
                    )
                )
            }
        }
        return <span>No tasks</span>
    }

    render() {
        return (
            <ul>
                {this.generateTodoItems()}
            </ul>
        )
    }
}

TodoList.contextTypes = {
    store: PropTypes.object
};

export default TodoList;
