import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext);

    useEffect(() => {
        getTasks();
    }, [getTasks]);

    return (
        <div>
            <h2>Task List</h2>
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
