const initialState = {
    items: []
}

export const todosReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {items: [...state.items, action.payload]}   
        case 'REMOVE_TODO':
            const filter = state.items.filter((_, id) => +id !== +action.payload);
            return {items: filter}
        default:
            return state
    }
}

export const addTodo = (payload) => (
    {type: 'ADD_TODO', payload}
)

export const removeTodo = (payload) => (
    {type: 'REMOVE_TODO', payload}
) 