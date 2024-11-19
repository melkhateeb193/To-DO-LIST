import "./listItems.css";
import PropTypes from "prop-types";

export default function ListItems({ toDoArr, handleDelete, handleClick, lineThrough }) {
  return (
    <ul>
      {toDoArr.map((task, i) => {
        return (
          <li key={`${task}${i}`} onClick={() => handleClick(i)}>
            <span className={lineThrough[i] ? "imgSpan" : "imgSpanToggle"}>
              {lineThrough[i] ? (
                <img className="check" src="/images/icon-check.svg" alt="check" />
              ) : (
                ""
              )}
            </span>
            <span className="spanLi">
              <p className={lineThrough[i] ? "lineThrow" : ""}>{task}</p>
              <img
                src="/images/icon-cross.svg"
                alt="cross"
                className="delete"
                onClick={() => handleDelete(i)}
              />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

ListItems.propTypes = {
  toDoArr: PropTypes.array.isRequired,
  lineThrough: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
