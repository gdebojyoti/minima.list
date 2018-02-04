export function addTodo (id, text) {
    return {
        type: "ADD_TODO",
        data: {
            id,
            text
        }
    };
}
