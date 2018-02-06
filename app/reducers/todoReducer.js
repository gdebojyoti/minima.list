import ENM from "./../enums";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            // TODO: Temporary. Remove this after implementing TOGGLE_TODO
            let status = action.data.id % 2 !== 0 ? ENM.STATUS.PENDING : ENM.STATUS.COMPLETED;
            return [
                ...state,
                {
                    id: action.data.id,
                    text: action.data.text,
                    status
                }
            ];
        default:
            return state;
    }
};
