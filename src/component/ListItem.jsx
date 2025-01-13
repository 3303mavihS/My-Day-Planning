import { MdDoneAll } from "react-icons/md";
import { MdRemoveDone } from "react-icons/md";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";

const ListItem = ({ taskObj, sno, handleDeleteAction, handleDoneAction }) => {
  const { id, task, allotedTime, isCompleted } = taskObj;
  return (
    <div className="list-item">
      <div className="content-div">
        <span
          className="sno"
          style={
            isCompleted
              ? { textDecoration: "line-through" }
              : { fontWeight: "bold" }
          }
        >
          {sno}
        </span>
        <span
          className="task"
          style={
            isCompleted
              ? { textDecoration: "line-through" }
              : { fontWeight: "bold" }
          }
        >
          {task}
        </span>
      </div>
      <span
        className="time"
        style={
          isCompleted
            ? { textDecoration: "line-through" }
            : { fontWeight: "bold" }
        }
      >
        {allotedTime}
      </span>
      <span className="action">
        <button onClick={() => handleDoneAction(id)}>
          {!isCompleted ? (
            <MdDoneAll className="btnIcon" />
          ) : (
            <MdRemoveDone className="btnIcon" />
          )}
        </button>
        <button onClick={() => handleDeleteAction(id)}>
          <MdOutlineDoNotDisturbOn className="btnIcon" />
        </button>
      </span>
    </div>
  );
};
export default ListItem;
