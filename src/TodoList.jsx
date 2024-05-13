import List from '@mui/material/List';
import TodoItem from './TodoItem';
import { useState } from 'react';

const initialTodos = [
    {id:1, text:"Do this course", completed:false},
    {id:2, text:"Do homework", completed:true},
    {id:3, text:"Swipe and mop", completed:false},
    {id:4, text:"Do the dishes", completed:false},
    {id:5, text:"Do this course", completed:false}
]

export default function TodoList(){
    const [todos, setTodos] = useState(initialTodos); 
    
    const removeTodo = (id) => {
        setTodos(previousTodos => {
            return previousTodos.filter((t) => t.id !== id)
        })
    }

    return (
        <List sx={{width:"100%", maxWidth:360, bgcolor:'background.paper'}}>
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} remmoveTodo={() => removeTodo(todo.id)}/>
            })
            }
        </List>   
    )
}
