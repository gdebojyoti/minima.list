import React from 'react';
import './index.scss';
import TodoList from "./../TodoList";

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
    }

    render () {
        return (
            <div>
                <button onClick={ this.onLike }>Likes: { this.state.likesCount }</button>
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
