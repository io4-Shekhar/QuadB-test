import { useState } from "react";
import { Switch } from "@mui/material";
import Navbar from "./Component/navbar";
import TodoTaskList from "./Component/todoTaskList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    // document.location.reload();
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  const GetDarkMode = localStorage.getItem("style");
  const DarkModeData = JSON.parse(GetDarkMode);

  console.log("DarkModeData", DarkModeData);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div
        // style={{
        //   backgroundColor: DarkModeData?.backgroundColor,
        //   color: DarkModeData?.color,
        // }}
        >
          <Navbar checked={toggleDarkMode} onChange={toggleDarkTheme} />
          <TodoTaskList DarkModeData={DarkModeData} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
