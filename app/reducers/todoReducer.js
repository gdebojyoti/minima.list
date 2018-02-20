import ENM from "./../enums";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.data.id,
                    text: action.data.text,
                    status: ENM.STATUS.PENDING,
                    label: ENM.LABEL.WORK
                }
            ];
        case "TOGGLE_TODO":
            let newState = [...state];
            let todoIndex = findArrayIndexByAttr(newState, "id", action.data.id);
            if (todoIndex > -1) {
                newState[todoIndex].status = newState[todoIndex].status === ENM.STATUS.PENDING ? ENM.STATUS.COMPLETED : ENM.STATUS.PENDING;
            }
            return newState;
        default:
            return state;
    }
};

function findArrayIndexByAttr (array, attrName, attrVal) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][attrName] === attrVal) {
            return i;
        }
    }
    return -1;
}
