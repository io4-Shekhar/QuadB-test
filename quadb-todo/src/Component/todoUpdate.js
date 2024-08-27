import { Box, Button, Checkbox, Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function TodoUpdate({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleDelete = (evt) => {
    remove(evt);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = (evt) => {
    evt.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = (evt) => {
    setTask(evt.target.value);
  };
  const toggleCompleted = (evt) => {
    toggleComplete(evt.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <Box className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <TextField
            onChange={handleChange}
            value={task}
            type="text"
            height="10px"
            size="small"
            sx={{
              width: "260px",
              marginTop: "10px",
              border: "none",
              borderRadius: "10px",
              padding: "0px",
              backgroundColor: "white",
            }}
          />
          <Button onClick={handleUpdate}>Save</Button>
        </form>
      </Box>
    );
  } else {
    result = (
      <Box
        sx={{
          display: "flex",
          borderBottom: "1px solid black",
          marginLeft: "",
        }}
      >
        <Checkbox size="small" sx={{ marginTop: "8px" }} />
        <li
          style={{
            padding: "5px",
            width: "600px",
            backgroundColor: "white",
            marginTop: "10px",
            borderRadius: "10px",
            color: "black",
            listStyle: "none",
          }}
          id={todo.id}
          onClick={toggleCompleted}
          //   className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
          className="Todo-buttons"
        >
          <Button onClick={toggleFrom}>
            <EditIcon />
          </Button>
          <Button onClick={() => handleDelete(todo.id)}>
            <DeleteIcon />
          </Button>
          <Button>
            <StarBorderIcon />
          </Button>
        </Box>
      </Box>
    );
  }
  return result;
}

export default TodoUpdate;
