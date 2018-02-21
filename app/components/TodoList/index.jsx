import React from "react";
import TodoItem from "./../TodoItem";
import {connect} from "react-redux";

import "./index.scss";

import ENM from "./../../enums";

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.getFilteredTodoItems = this.getFilteredTodoItems.bind(this);
        this.getCompletedTodoItems = this.getCompletedTodoItems.bind(this);
        this.getTotalTodoItems = this.getTotalTodoItems.bind(this);
        this.generateTodoItems = this.generateTodoItems.bind(this);
    }

    getFilteredTodoItems() {
        let todos = this.props.todos.filter(todo => todo.status === this.props.filterBy && todo.label === this.props.label);
        return todos;
    }

    getCompletedTodoItems() {
        let todos = this.props.todos.filter(todo => todo.status === ENM.STATUS.COMPLETED && todo.label === this.props.label);
        return todos;
    }

    getTotalTodoItems() {
        let todos = this.props.todos.filter(todo => todo.label === this.props.label);
        return todos;
    }

    generateTodoItems () {
        let todos = this.getFilteredTodoItems();
        if (todos.length > 0) {
            return (
                todos.map(
                    todo => <TodoItem text={todo.text} key={todo.id} toggleTodo={() => this.props.toggleTodo(todo.id)} archiveTodo={this.props.archiveTodo} />
                )
            )
        }
    }

    getProgressCount() {
        let totalLength = this.getTotalTodoItems().length;
        if (!totalLength) {
            return "N/A";
        }
        let completedLength = this.getCompletedTodoItems().length;
        return Math.round(100 * completedLength / totalLength) + "%";
    }

    render() {
        return (
            <div className="todo-list">
                <span>{this.getFilteredTodoItems().length || "No"} tasks</span>
                <h3>{this.props.label}</h3>
                <ul>
                    {this.generateTodoItems()}
                </ul>

                <div className="todo-list-progress">
                    <div className="progress-bar">
                        <div className="progress-bar-remaining" style={{ width: "calc(100% - " + this.getProgressCount() + ")" }}></div>
                    </div>
                    <div className="progress-count">{this.getProgressCount()}</div>
                </div>
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
