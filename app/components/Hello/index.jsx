import React, {Component} from "react";
import {connect} from "react-redux";

import ENM from "./../../enums";

import "./index.scss";

class Hello extends Component {
    computeActiveTasks() {
        let count = 0;
        for (let todo of this.props.todos) {
            if (todo.status === ENM.STATUS.PENDING) {
                count++;
            }
        }
        return count;
    }

    render() {
        return (
            <div className="hello">
                <h1>Hello, {this.props.settings.name}.</h1>
                { !this.computeActiveTasks() &&
                    <p>You have no tasks pending. Enjoy your day!</p>
                }
                { this.computeActiveTasks() === 1 &&
                    <p>Just the one task left today.</p>
                }
                { this.computeActiveTasks() > 1 &&
                    <p>You have {this.computeActiveTasks()} tasks pending today.</p>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        settings: state.settings,
        todos: state.todos
    }
};

export default connect(mapStateToProps)(Hello);
