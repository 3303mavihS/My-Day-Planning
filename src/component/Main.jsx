import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Main = ({
  tasks,
  handleTaskAfterInput,
  handleDoneAction,
  handleDeleteAction,
}) => {
  return (
    <div className="main-div">
      <div className="input-div">
        <TaskForm handleTaskAfterInput={handleTaskAfterInput} />
      </div>
      {tasks.length !== 0 && (
        <div className="data-div">
          <TaskList
            tasks={tasks}
            handleDeleteAction={handleDeleteAction}
            handleDoneAction={handleDoneAction}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
