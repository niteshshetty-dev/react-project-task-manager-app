import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/taskSlice";
import { useNavigate } from "react-router-dom";

function Add() {
  const [newTask, setNewTask] = useState("");
  const [warning, setWarning] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleNewtask(e) {
    setNewTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask.trim() === "") {
      setWarning("Please enter a task!!");
      return;
    }
    setWarning("");
    const payload = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    };
    dispatch(addTask(payload));

    navigate("/");
    setNewTask("");
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleNewtask}
            value={newTask}
            placeholder="Enter your to do"
          ></input>
          <button type="submit">Submit</button>
        </form>
        <div className="warning-container">{warning}</div>
      </div>
    </>
  );
}

export default Add;
