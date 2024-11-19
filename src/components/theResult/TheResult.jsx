import "./theResult.css"
import PropTypes from "prop-types";

export default function TheResult({lineThrough ,handleComplete}) {

let itemsLeft = lineThrough.filter((item)=>!item).length

  return (
<div className="result">
  <p>{`${itemsLeft} items left`}</p>
  <p className="Btn-clear" onClick={handleComplete}>clear Complete</p>
</div>
  )
}
TheResult.propTypes = {
  lineThrough: PropTypes.array.isRequired,
  handleComplete: PropTypes.func.isRequired
}