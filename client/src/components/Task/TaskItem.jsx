import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';

const TaskItem = ({ task }) => {
    const { deleteTask, updateTask } = useContext(TaskContext);

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
            <button onClick={() => updateTask({ ...task, completed: !task.completed })}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
        </div>
    );
};

export default TaskItem;
