import { useState } from "react";
import TIMELIST from "../assets/data/time.js";

function generateUniqueId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const idLength = 5;

  let uniqueId = "";
  const timestamp = Date.now().toString(); // Use the current timestamp for uniqueness

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueId += characters[randomIndex];
  }

  // Add part of the timestamp to ensure uniqueness
  uniqueId += timestamp.slice(-5); // Append the last 5 digits of the timestamp

  return uniqueId;
}

const TaskForm = ({ handleTaskAfterInput }) => {
  //props
  // useStates
  const [inputTask, setInputTask] = useState("");
  const [selectTime, setSelectTime] = useState("5 minutes");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputTask) {
      const newTask = {
        id: generateUniqueId(),
        task: inputTask,
        allotedTime: selectTime,
        isCompleted: false,
      };
      //console.log(newTask);
      handleTaskAfterInput(newTask);
    }
  };
  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="task to do today..."
          value={inputTask}
          onChange={(e) => {
            setInputTask(e.target.value);
          }}
        />
        <select
          value={selectTime}
          onChange={(e) => {
            setSelectTime(e.target.value);
          }}
        >
          {TIMELIST.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
