import React from "react";
import TodoItem from "./../TodoItem";
import {connect} from "react-redux";

import "./index.scss";

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.generateTodoItems = this.generateTodoItems.bind(this);
    }

    generateTodoItems () {
        let todos = this.props.todos.filter(todo => todo.status === this.props.filterBy && todo.label === this.props.label);
        if (todos.length > 0) {
            return (
                todos.map(
                    todo => <TodoItem text={todo.text} key={todo.id} toggleTodo={() => this.props.toggleTodo(todo.id)} archiveTodo={this.props.archiveTodo} />
                )
            )
        }
        return <span>No tasks</span>
    }

    render() {
        return (
            <div className="todo-list">
                <h3>{this.props.label}</h3>
                <ul>
                    {this.generateTodoItems()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);
