import { legacy_createStore as createStore, combineReducers } from 'redux'
import { counterReducer } from './counterReducer'
import { todosReducer } from './todosReducer'


const rootReducer = combineReducers({
    todos: todosReducer,
    counter: counterReducer
})

export default createStore(rootReducer)