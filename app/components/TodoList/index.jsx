import React from "react";
import TodoItem from "./../TodoItem";
import {connect} from "react-redux";

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.generateTodoItems = this.generateTodoItems.bind(this);
    }

    generateTodoItems () {
        let todos = this.props.todos.filter(todo => todo.status === this.props.filterBy);
        if (todos.length > 0) {
            return (
                todos.map(
                    todo => <TodoItem text={todo.text} key={todo.id} />
                )
            )
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

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);
