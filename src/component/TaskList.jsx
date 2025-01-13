//import DATA from "../assets/data/data.js";
import ListItem from "./ListItem";

const TaskList = ({ tasks, handleDeleteAction, handleDoneAction }) => {
  const data = tasks;
  // let index = 1;
  return (
    <div className="table-div">
      <div className="table-title-div list-item">
        <div className="content-div">
          <span className="sno">S. No.</span>
          <span className="task">Task</span>
        </div>
        <span className="time">Time Alloted</span>
        <span className="action">Action</span>
      </div>
      <div className="table-content-div">
        {data?.map((task, index) => (
          <ListItem
            taskObj={task}
            sno={index + 1}
            key={task.id}
            handleDeleteAction={handleDeleteAction}
            handleDoneAction={handleDoneAction}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
