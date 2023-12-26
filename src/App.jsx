// App.jsx

import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

const uniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (taskName) => {
    const newTask = { id: uniqueId(), taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (taskId) => {
    setToDoList(toDoList.filter((task) => task.id !== taskId));
  };

  const toggleCheck = (taskId) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleEdit = (task) => {
    setEditingTask(task); // This should set the task to be edited in the state
  };

  const updateTask = (taskId, newTaskName) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.id === taskId ? { ...task, taskName: newTaskName } : task
      )
    );
    setEditingTask(null); // Reset editingTask after updating
  };

  return (
    <>
      <div className="container">
        <h1>Task Notes</h1>

        <TaskInput
          addTask={addTask}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          updateTask={updateTask}
        />

        <div className="toDoList">
          <span>To Do</span>
          <ul className="list-items">
            {toDoList.map((task) => (
              <TaskItem
                task={task}
                key={task.id}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
                handleEdit={handleEdit}
              />
            ))}
          </ul>

          {toDoList.length === 0 ? (
            <p className="notify">You are done!</p>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
