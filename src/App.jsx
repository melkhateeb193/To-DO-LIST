import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import OutPut from "./components/outPut/OutPut";
import TheTopContainer from "./components/theTopContainer/TheTopContainer";

function App() {
  const [togglePage, setTogglePage] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [toDoArr, setToDoArr] = useState([]);
  const [filterTypes, setFilterType] = useState("all");
  const [lineThrough, setLineThrough] = useState([]);

  const handleTogglePage = () => {
    setTogglePage((prev) => !prev);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTodo = () => {
    if (inputValue.trim()) {
      setToDoArr([...toDoArr, inputValue]);
      setLineThrough([...lineThrough, false]); 
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    setToDoArr(toDoArr.filter((item, i) => i !== index));
    setLineThrough(lineThrough.filter((_, i) => i !== index));
  };

  const handleClick = (i) => {
    const updatedCheckedItems = [...lineThrough];
    updatedCheckedItems[i] = !updatedCheckedItems[i];
    setLineThrough(updatedCheckedItems); 
  };


  const filteredTasks = toDoArr.filter((task, i) => {
    if (filterTypes === "active") {
      return !lineThrough[i]; 
    } else if (filterTypes === "completed") {
      return lineThrough[i]; 
    } else {
      return true; 
    }
  });

  return (
    <main
      className={togglePage ? "mainDark" : "mainLight"}
      style={{
        backgroundImage: togglePage
          ? "url(/images/bg-desktop-dark.jpg)"
          : "url(/images/bg-desktop-light.jpg)",
      }}
    >
      <div className="inputOutputContainer">
        <TheTopContainer
          handleTogglePage={handleTogglePage}
          togglePage={togglePage}
        />
        <span className={togglePage ? "spanInputDark" : "spanInputLight"}>
          <span className="circle" onClick={handleTodo}></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="Input"
            value={inputValue}
            onChange={handleChange}
          />
        </span>
        <OutPut
          toDoArr={filteredTasks} // Pass filtered tasks here
          handleDelete={handleDelete}
          togglePage={togglePage}
          setToDoArr={setToDoArr}
          setLineThrough={setLineThrough}
          lineThrough={lineThrough}
          handleClick={handleClick}
        />
        <Footer togglePage={togglePage} setFilterType={setFilterType} />
      </div>
    </main>
  );
}

export default App;
