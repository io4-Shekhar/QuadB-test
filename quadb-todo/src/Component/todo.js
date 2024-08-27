import { Box, Button, TextField } from "@mui/material";
import React, { useState, useReducer } from "react";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import LoopTwoToneIcon from "@mui/icons-material/LoopTwoTone";
import DateRangeTwoToneIcon from "@mui/icons-material/DateRangeTwoTone";

function Todo({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: "",
    }
  );

  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newTodo = {
      id: Math.random() + 3,
      task: userInput.task,
      completed: false,
    };

    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <>
      <form className="NewTodoForm" onSubmit={handleSubmit}>
        <label htmlFor="task"></label>
        <TextField
          type="text"
          id="task"
          name="task"
          label="What is your next task"
          variant="outlined"
          value={userInput.task}
          onChange={handleChange}
          sx={{ border: "transparent" }}
        />
      </form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Box>
          <NotificationsTwoToneIcon />
          <LoopTwoToneIcon />
          <DateRangeTwoToneIcon />
        </Box>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "transparent",
            color: "green",
            height: "40px",
            marginLeft: "10px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "transparent",
              color: "green",
              height: "40px",
              marginLeft: "10px",
              textTransform: "capitalize",
            },
          }}
        >
          Add todo
        </Button>
      </Box>
    </>
  );
}

export default Todo;
