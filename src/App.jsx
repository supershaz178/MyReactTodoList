import TodoList from './TodoList';
import Navbar from './Navbar';
import './App.css'
import CssBaseline from "@mui/material/CssBaseline"; 

function App() {

  return (
    <>
    <Navbar />
      <CssBaseline />
      <TodoList/>
    </>
  )
}

export default App
