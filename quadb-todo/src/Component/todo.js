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
          label="Add A Task"
          variant="outlined"
          value={userInput.task}
          onChange={handleChange}
          sx={{
            border: "",
            width: "100%",
            "& fieldset": { border: "none" },
            marginTop: "20px",
          }}
        />
      </form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Box sx={{ marginLeft: "8px" }}>
          <NotificationsTwoToneIcon />
          <LoopTwoToneIcon sx={{ marginLeft: "12px" }} />
          <DateRangeTwoToneIcon sx={{ marginLeft: "12px" }} />
        </Box>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "transparent",
            color: "green",
            height: "35px",
            marginRight: "2px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "transparent",
              color: "green",
              height: "35px",
              marginLeft: "2px",
              textTransform: "capitalize",
            },
          }}
        >
          ADD TASK
        </Button>
      </Box>
    </>
  );
}

export default Todo;
