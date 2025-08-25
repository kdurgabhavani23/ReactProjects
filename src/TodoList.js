import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);
  const handleTask = (e) => {
    setTaskInput(e.target.value);
  };
  const handleAddTask = () => {
    if (taskInput.trim() === "") return;
    if (editIndex !== null) {
      const updatedList = [...taskList];
      updatedList[editIndex].name = taskInput;
      setTaskList(updatedList);
      setEditIndex(null);
    } else {
      setTaskList([...taskList, { name: taskInput }]);
    }
    setTaskInput("");
  };
  const handleRemove = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };
  const handleEdit = (index) => {
    setTaskInput(taskList[index].name);
    setEditIndex(index);
  };
  return (
    <>
      <div>
        <h1>TodoList</h1>
        <div
          style={{
            border: "1px solid gray",
            display: "grid",
            gridTemplate: "auto auto",
            margin: "4px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div> Name</div>
            <div>Actions</div>
          </div>
          {taskList.length === 0 && <>No More Tasks</>}
          {taskList.map((items, index) => (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "space-between",
                  padding: "4px 84px",
                }}
              >
                <div key={index}>{items.name}</div>
                <div style={{ display: "flex", gap: "5px" }}>
                  <button
                    onClick={() => handleEdit(index)}
                    style={{
                      color: "white",
                      border: "1px solid blue",
                      backgroundColor: "Blue",
                      borderRadius: "5px",
                      padding: "8px",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemove(index)}
                    style={{
                      color: "white",
                      border: "1px solid red",
                      backgroundColor: "red",
                      borderRadius: "5px",
                      padding: "8px",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <input
          name=""
          value={taskInput}
          onChange={(e) => handleTask(e)}
          placeholder="Type here new task"
          style={{
            marginTop: "4px",
            height: "32px",
            borderRadius: "5px",
            padding: "4px",
          }}
        />
        &nbsp;&nbsp;
        <button
          onClick={() => handleAddTask()}
          style={{
            color: "white",
            border: "1px solid green",
            backgroundColor: "green",
            borderRadius: "5px",
            padding: "8px",
          }}
        >
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </div>
    </>
  );
};
export default TodoList;
