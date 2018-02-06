import React from "react";
import PropTypes from "prop-types";

import ENM from "./../../enums";
import { filterTodo } from "./../../actions/todoActions";

class TodoFilter extends React.Component {
    constructor () {
        super();
        this.setFilter = this.setFilter.bind(this);
    }

    setFilter (status) {
        const { store } = this.context;
        store.dispatch(filterTodo(status));
    }

    render () {
        const { store } = this.context;
        return (
            <div>
                <button onClick={() => this.setFilter(ENM.STATUS.PENDING)}>Pending</button>
                <button onClick={() => this.setFilter(ENM.STATUS.COMPLETED)}>Completed</button>
            </div>
        )
    }
}


TodoFilter.contextTypes = {
    store: PropTypes.object
};

export default TodoFilter;
