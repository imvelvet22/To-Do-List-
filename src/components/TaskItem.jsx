// TaskItem.jsx

import React from 'react';
import { MdDeleteSweep, MdEdit } from 'react-icons/md';

const TaskItem = ({ task, deleteTask, toggleCheck, handleEdit }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.id)}
        />
        <p className={task.checked ? 'isChecked' : ''}>{task.taskName}</p>
      </div>
      <div className="actions">
        <MdEdit
          className="edit-icon"
          onClick={() => handleEdit(task)}
          title="Edit"
        />
        <MdDeleteSweep
          className="delete-icon"
          onClick={() => deleteTask(task.id)}
          title="Delete"
        />
      </div>
    </li>
  );
};

export default TaskItem;
