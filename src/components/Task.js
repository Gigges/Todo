import reactDom from "react-dom";
import {FaTimes} from "react-icons/fa"
import Button from "./Button"
const Task = ({task, onDelete, onToggle}) => {


    return (
        <div className={`task ${task.done ? 'done' :"" }`} onDoubleClick={() => onToggle(task.id)}>
            <h3
            >
                {task.name}<FaTimes style={{color:"black", cursor: "pointer"}}
                onClick={() => onDelete(task.id)}/>
            </h3>
        </div>
    )
}

export default Task;
