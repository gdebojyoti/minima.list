import React from "react";

import "./index.scss";

class TodoInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange (e) {
        this.setState({text: e.target.value});
    }

    handleKeyPress (e) {
        if (e.key === "Enter") {
            this.props.addTodo(this.state.text);
            this.setState({text: ""});
        }
    }

    render () {
        return (
            <div>
                <input className="todo-input" type="text" placeholder="What task are you planning to perform?" autoFocus value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
            </div>
        )
    }
}

export default TodoInput;
