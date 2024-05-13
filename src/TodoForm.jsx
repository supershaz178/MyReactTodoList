import { IconButton, ListItem, OutlinedInput } from "@mui/material";
import Create from "@mui/icons-material/Create";
import {InputAdornment} from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function TodoForm({addTodo}){
    const [text, setText] = useState(""); 

    const handleChange = (evt) => {
        setText(evt.target.value); 
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        addTodo(text); 
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic"
                    label="Add Todo"
                    varient="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                            <IconButton edge="end" aria-label="create todo" type="submit">
                                <Create />
                            </IconButton>
                          </InputAdornment>
                    }}
                />
            </form>
        </ListItem>
    )
}