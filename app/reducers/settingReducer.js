const initialState = {
    name: "Emma"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return {
                /* jshint ignore:start */
                ...state,
                /* jshint ignore:end */
                name: action.data.name
            };
        default:
            return state;
    }
};
