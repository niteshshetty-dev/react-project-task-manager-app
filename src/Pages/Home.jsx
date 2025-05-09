import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../Redux/taskSlice";
import { FaClipboardList } from "react-icons/fa";

import "../styles/Home.css";

function Home() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  function handleCheckbox(id) {
    dispatch(toggleTask(id));
  }

  function handleDelete(id) {
    dispatch(deleteTask(id));
  }

  return (
    <>
      {tasks.length === 0 ? (
        <div className="empty-state">
          <FaClipboardList size={40} color="#444" />
          <p>No tasks yet. Add a task to get started!</p>
        </div>
      ) : (
        <div className="home-container">
          <div className="home-title">
            <h2>What’s on your plate today?</h2>
          </div>
          {tasks.map((task) => (
            <div className="task-item" key={task.id}>
              <input
                type="checkbox"
                onChange={() => handleCheckbox(task.id)}
                checked={task.completed}
              ></input>
              <p className={task.completed ? "completed" : ""}>{task.title}</p>
              <button type="button" onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
