import React, { useState } from "react";
import Todo from "./todo";
import TodoUpdate from "./todoUpdate";
import avtar from "../Assets/avtar.jpg";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import AssignmentIndTwoToneIcon from "@mui/icons-material/AssignmentIndTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import Checkbox from "@mui/material/Checkbox";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";

function TodoTaskList() {
  console.log("random number", Math.random());
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoData")) ?? [
      { id: Math.random() + 1, task: "task 1", completed: false },
      { id: Math.random() + 2, task: "task 2", completed: true },
    ]
  );

  const create = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    localStorage.setItem("todoData", JSON.stringify([...todos, newTodo]));
  };

  const remove = (id) => {
    console.log("id", id);
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem(
      "todoData",
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
  };
  console.log("todos", todos);
  const update = (id, updtedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
    console.log("updatdtodo", updatedTodos);
    localStorage.setItem("todoData", JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //   const todoLocalData = ;
  //   console.log("todoLocalData", todoLocalData);
  const todosList = todos.map((todo) => (
    <TodoUpdate
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));
  return (
    <>
      <Box>
        <Grid
          container
          sx={{
            backgroundColor: "transparent",
            height: "500px",
            margin: "auto",
            marginTop: "25px",
            padding: "10px",
          }}
          rowSpacing={1}
          // columnSpacing={{ xs: 1, sm: 2, md: 0 }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              backgroundColor: "#EEF6EF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={avtar}
                sx={{ width: 80, height: 80 }}
              />
            </Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Hey, Chandra Shekhar
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                backgroundColor: "white",
                margin: "auto",
                width: "90%",
                height: "200px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "20px",
                  height: "30px",
                  paddingTop: "5px",
                  "&:hover": {
                    backgroundColor: "#EEF6EF",
                    color: "green",
                    borderRadius: "10px",
                    height: "30px",
                  },
                }}
              >
                <AssignmentIcon />
                <Typography
                  sx={{
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                >
                  All task
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "20px",
                  height: "30px",
                  paddingTop: "5px",
                  "&:hover": {
                    backgroundColor: "#EEF6EF",
                    color: "green",
                    borderRadius: "10px",
                    height: "30px",
                  },
                }}
              >
                <CalendarMonth />

                <Typography style={{ cursor: "pointer", marginLeft: "10px" }}>
                  Today
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "20px",
                  height: "30px",
                  paddingTop: "5px",
                  "&:hover": {
                    backgroundColor: "#EEF6EF",
                    color: "green",
                    borderRadius: "10px",
                    height: "30px",
                  },
                }}
              >
                <GradeOutlinedIcon />

                <Typography style={{ cursor: "pointer", marginLeft: "10px" }}>
                  Important
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "20px",
                  height: "30px",
                  paddingTop: "5px",
                  "&:hover": {
                    backgroundColor: "#EEF6EF",
                    color: "green",
                    borderRadius: "10px",
                    height: "30px",
                  },
                }}
              >
                <MapTwoToneIcon />
                <Typography style={{ cursor: "pointer", marginLeft: "10px" }}>
                  Planned
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "20px",
                  height: "30px",
                  paddingTop: "5px",
                  "&:hover": {
                    backgroundColor: "#EEF6EF",
                    color: "green",
                    borderRadius: "10px",
                    height: "30px",
                  },
                }}
              >
                <AssignmentIndTwoToneIcon />
                <Typography style={{ cursor: "pointer", marginLeft: "10px" }}>
                  Assigned to me
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                backgroundColor: "white",
                margin: "10px auto",
                width: "90%",
                height: "80px",
              }}
            >
              <Typography
                sx={{
                  marginTop: "30px",
                  paddingLeft: "20px",
                  display: "flex",
                }}
              >
                <AddTwoToneIcon />
                <Typography
                  sx={{
                    marginLeft: "10px",
                  }}
                >
                  Add list
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "white",
                marginTop: "5px",
              }}
            >
              <Typography sx={{ cursor: "pointer" }}>Today task</Typography>
              <Typography>11</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={9} sx={{ padding: "0 0 0 25px !important" }}>
            <Box sx={{ backgroundColor: "#EEF6EF", height: "130px" }}>
              <Todo createTodo={create} />
            </Box>
            <ul
              style={{
                padding: "0px",
                height: "300px",
                overflowY: todos?.length >= 7 ? "scroll" : "none",
              }}
            >
              {todosList}
            </ul>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default TodoTaskList;
