export function addTodo (id, text, status) {
    return {
        type: "ADD_TODO",
        data: {
            id,
            text,
            status
        }
    };
}

export function toggleTodo (id) {
    return {
        type: "TOGGLE_TODO",
        data: {
            id
        }
    };
}

export function filterTodo (status) {
    return {
        type: "FILTER_TODO",
        data: {
            status
        }
    };
}
