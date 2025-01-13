import { useEffect, useState } from "react";
import Footer from "./component/Footer.jsx";
import Header from "./component/Header.jsx";
import Main from "./component/Main.jsx";

function App() {
  // defining and declaring the variables and function here
  // that will be passed to appropriate the children
  // here we are using uplifting state method where who children
  // doesn't have any relation but need to share data
  // here input-div will get the variable and function so that it will
  // be accessing them as parent members and properties and store data to parent
  // and other children can also use it
  const taskExist = localStorage.getItem("tasks") !== null;
  const existingTask = JSON.parse(localStorage.getItem("tasks"));
  const remainingCountExist = localStorage.getItem("remaining-count") !== null;
  const remainingCount = parseInt(localStorage.getItem("remaining-count"));
  const [total, setTotal] = useState(taskExist ? existingTask.length : 0);
  const [remaining, setRemaining] = useState(
    remainingCountExist ? remainingCount : 0
  );
  const [done, setDone] = useState(
    taskExist && remainingCountExist ? existingTask.length - remainingCount : 0
  );
  const [tasks, setTasks] = useState(taskExist ? existingTask : []);

  const handleTaskAfterInput = (task) => {
    setTasks((tasks) => [...tasks, task]);
    // console.log(tasks);
    setTotal(total + 1);
    setRemaining((remaining) => remaining + 1);
  };

  const handleDeleteAction = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    if (taskToDelete) {
      if (taskToDelete.isCompleted) {
        setDone(done - 1);
      } else {
        setRemaining(remaining - 1);
      }
      setTasks((tasks) => tasks.filter((task) => task.id !== id));
      setTotal(total - 1);
    }
  };

  const handleDoneAction = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          const updatedTask = { ...task, isCompleted: !task.isCompleted };
          if (updatedTask.isCompleted) {
            setDone(done + 1);
            setRemaining(remaining - 1);
          } else {
            setDone(done - 1);
            setRemaining((remaining) => remaining + 1);
          }
          return updatedTask;
        } else {
          return task;
        }
      })
    );
  };

  useEffect(() => {
    // console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("remaining-count", remaining);
  }, [tasks]);

  return (
    <div className="bodyMain">
      <Header />
      <Main
        tasks={tasks}
        handleTaskAfterInput={handleTaskAfterInput}
        handleDoneAction={handleDoneAction}
        handleDeleteAction={handleDeleteAction}
      />
      <Footer total={total} remaining={remaining} done={done} />
    </div>
  );
}

export default App;
