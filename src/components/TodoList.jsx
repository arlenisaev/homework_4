import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { addTodo, removeTodo } from '../store/todosReducer'

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.items)
    const dispatch = useDispatch()

    const onButtonClick = () => {
        if (newTodo.trim() !== ''){
            dispatch(addTodo({
                id: new Date(),
                text: newTodo
            }))
            setNewTodo('')
        }
    }

    const handleClickRemove = (e) => {
        dispatch(removeTodo(e))
    }

    return (
        <div><h4>TodoList</h4>
            <input 
                type="text"
                onChange={e => setNewTodo(e.target.value)}
                value={newTodo} />
            <button onClick={onButtonClick}>Добавить</button><br />
            <ul>{todos.map((t, id)  => 
                <li key={id}> 
                {t.text}
                <button style={{marginLeft: '15px'}} onClick={() => handleClickRemove(id)}>x</button>
                </li>
            )}</ul>
        </div>
    )
}
export default TodoList