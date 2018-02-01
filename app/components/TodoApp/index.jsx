import React from 'react';
import './index.scss';
import TodoList from "./../TodoList";
import TodoInput from "./../TodoInput";

class TodoApp extends React.Component {
    constructor () {
        super();
        this.state = {
            likesCount: 0,
            todos: [
                {
                    id: 11,
                    todo: "Learn React JS"
                },
                {
                    id: 12,
                    todo: "Learn Webpack"
                },
                {
                    id: 13,
                    todo: "Learn Babel"
                },
            ]
        };
        this.onLike = this.onLike.bind(this);
        this.addTodoItem = this.addTodoItem.bind(this);
    }

    addTodoItem (todo) {
        let currentTodos = [...this.state.todos];
        let lastId = currentTodos[currentTodos.length - 1].id;
        currentTodos.push({
            id: lastId + 1,
            todo
        });

        this.setState({todos: currentTodos});
    }

    render () {
        return (
            <div>
                <button onClick={ this.onLike }>Likes: { this.state.likesCount }</button>
                <TodoInput addTodoItem={this.addTodoItem} />
                <TodoList todos={ this.state.todos } />
            </div>
        )
    }

    onLike () {
        this.setState({
            likesCount: this.state.likesCount + 1
        });
    }
}

export default TodoApp;
