import Navbar from "./Component/navbar";
import TodoTaskList from "./Component/todoTaskList";

function App() {
  const GetDarkMode = localStorage.getItem("style");
  const DarkModeData = JSON.parse(GetDarkMode);

  console.log("DarkModeData", DarkModeData);
  return (
    <div
    // style={{ backgroundColor: DarkModeData?.backgroundColor }}
    >
      <Navbar />
      <TodoTaskList />
    </div>
  );
}

export default App;
