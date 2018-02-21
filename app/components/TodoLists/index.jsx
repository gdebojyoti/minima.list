import React from "react";
import TodoList from "./../TodoList";
import {connect} from "react-redux";

import ENM from "./../../enums";
import { toggleTodo } from "./../../actions/todoActions";

import "./index.scss";

class TodoLists extends React.Component {
    constructor (props) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.getCurrentFilter = this.getCurrentFilter.bind(this);
    }

    toggleTodo (id) {
        this.props.toggleTodo(id);
    }

    getCurrentFilter () {
        if (this.props.filter.activeFilter) {
            return this.props.filter.activeFilter;
        }
        return ENM.STATUS.PENDING;
    }

    // TODO: Don't send "filterBy" props
    render() {
        return (
            <div className="todo-list-container">
                <div className="todo-list-slider" style={{width: "1195px"}}>
                    <TodoList filterBy={this.getCurrentFilter()} toggleTodo={this.toggleTodo} label={ENM.LABEL.WORK} />
                    <TodoList filterBy={this.getCurrentFilter()} toggleTodo={this.toggleTodo} label={ENM.LABEL.PERSONAL} />
                    <TodoList filterBy={this.getCurrentFilter()} toggleTodo={this.toggleTodo} label={ENM.LABEL.GROCERIES} />
                    <TodoList filterBy={this.getCurrentFilter()} toggleTodo={this.toggleTodo} label={ENM.LABEL.MISC} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: (id) => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
