const initialState = {
    activeFilter: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "FILTER_TODO":
            return {
                /* jshint ignore:start */
                ...state,
                /* jshint ignore:end */
                activeFilter: action.data.status
            };
        default:
            return state;
    }
};
