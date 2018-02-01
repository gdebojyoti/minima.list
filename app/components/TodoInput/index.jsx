import React from 'react';

const TodoInput_ = props => (
    <div>
        <input type="text" placeholder="Add a new task" onChange={console.log("sds")} />
    </div>
)

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
            this.props.addTodoItem(this.state.text);
            this.setState({text: ""});
        }
    }

    render () {
        return (
            <div>
                <input type="text" placeholder="Add a task" value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
            </div>
        )
    }
}

export default TodoInput;
