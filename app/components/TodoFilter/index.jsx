import React from "react";
import PropTypes from "prop-types";

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
                <button onClick={() => this.setFilter("PENDING")}>Pending</button>
                <button onClick={() => this.setFilter("COMPLETED")}>Completed</button>
            </div>
        )
    }
}


TodoFilter.contextTypes = {
    store: PropTypes.object
};

export default TodoFilter;
