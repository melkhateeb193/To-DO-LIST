import "./outPut.css";
import TheResult from "../theResult/TheResult";
import ListItems from "../listItem/ListItems";
import PropTypes from "prop-types";

export default function OutPut({
  toDoArr,
  handleDelete,
  togglePage,
  lineThrough,
  handleFilterTask, 
  setToDoArr, 
  setLineThrough, 
}) {

  const handleClick = (i) => {
    const updatedCheckedItems = [...lineThrough];
    updatedCheckedItems[i] = !updatedCheckedItems[i];
    setLineThrough(updatedCheckedItems);
  };


  const handleComplete = () => {
    const activeTasks = toDoArr.filter((_, i) => !lineThrough[i]);
    setToDoArr(activeTasks); 
    setLineThrough(new Array(activeTasks.length).fill(false)); 
  };

  return (
    <div className={togglePage ? "outputDark" : "outputLight"}>
      <ListItems
        toDoArr={toDoArr}
        handleDelete={handleDelete}
        handleClick={handleClick}
        lineThrough={lineThrough}
      />
      <TheResult
        toDoArr={handleFilterTask} 
        lineThrough={lineThrough}
        handleComplete={handleComplete}
      />
    </div>
  );
}

OutPut.propTypes = {
  toDoArr: PropTypes.array.isRequired, 
  handleDelete: PropTypes.func.isRequired, 
  togglePage: PropTypes.bool.isRequired, 
  setToDoArr: PropTypes.func.isRequired, 
  lineThrough: PropTypes.array.isRequired, 
  handleFilterTask: PropTypes.array.isRequired,
  setLineThrough: PropTypes.func.isRequired, 
};
