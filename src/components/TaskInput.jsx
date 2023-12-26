// TaskInput.jsx

import React, { useState, useEffect } from 'react';
import { MdCheck } from 'react-icons/md';

const TaskInput = ({ addTask, editingTask, setEditingTask, updateTask }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.taskName);
    }
  }, [editingTask]);

  const handleAddOrUpdateTask = (event) => {
    event.preventDefault();
    if (task.trim() === '') return;

    if (editingTask) {
      // Update existing task
      updateTask(editingTask.id, task);
      setEditingTask(null);
    } else {
      // Add new task
      addTask(task);
    }

    setTask('');
  };

  return (
    <form className="inputField" onSubmit={handleAddOrUpdateTask}>
      <input
        type="text"
        value={task}
        placeholder="Add Item"
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="submit">
        {editingTask ? <MdCheck /> : '+'}
      </button>
    </form>
  );
};

export default TaskInput;
