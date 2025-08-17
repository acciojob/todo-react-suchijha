
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [task, setTask] = useState("");      // input field value
  const [tasks, setTasks] = useState([]);    // list of tasks

  // Add task
  function addTask(e) {
    e.preventDefault();
    if (task.trim() === "") return; // prevent empty tasks
    setTasks([...tasks, task]);
    setTask(""); // clear input
  }

  // Delete task
  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div>
    

      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: "8px", marginRight: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 12px" }}>
          Add
        </button>
      </form>

      <ul style={{ marginTop: "20px", padding: "0", listStyle: "none" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              marginBottom: "6px",
              background: "#f5f5f5",
              borderRadius: "4px"
            }}
          >
            <span>{t}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer",
                borderRadius: "4px"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
