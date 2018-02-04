const initialState = {
    activeFilter: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "FILTER_TODO":
            return {
                ...state,
                activeFilter: action.data.status
            };
        default:
            return state;
    }
};
