import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography"; 
import { useState, useEffect } from "react";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));

    if(!data){
        return [];
    }

    return data; 
}

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

  const removeTodo = (id) => {
    setTodos((previousTodos) => {
      return previousTodos.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((previousTodos) => {
      return previousTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text) => {
    setTodos(previousTodos => {
        return [...previousTodos, {text: text, id:crypto.randomUUID(), completed:false}]
    })
  }

  return (
    <Box sx={{
        display:"flex",
        justifyContent:"center", 
        flexDirection:"column", 
        alignItems:"center",  
        m:3

    }}>
    <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        React Todos
    </Typography>
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={() => removeTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        );
      })}
      <TodoForm addTodo={addTodo}/>
    </List>
    </Box>
  );
}
