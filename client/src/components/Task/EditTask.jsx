import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../../contexts/TaskContext';

const EditTask = ({ taskId }) => {
    const { tasks, updateTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const task = tasks.find((task) => task._id === taskId);
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setCompleted(task.completed);
        }
    }, [tasks, taskId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask({ _id: taskId, title, description, completed });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Task</h2>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Completed:</label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                />
            </div>
            <button type="submit">Update Task</button>
        </form>
    );
};

export default EditTask;
