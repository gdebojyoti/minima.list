const sampleState = {
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

const initialState = [];

export default (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.data.id,
                    text: action.data.text
                }
            ];
        default:
            return state;
    }
};
