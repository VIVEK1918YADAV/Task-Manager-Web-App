import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const { user } = useContext(AuthContext);

    const getTasks = async () => {
        if (user) {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const { data } = await axios.get('/api/tasks', config);
            setTasks(data);
        }
    };

    const addTask = async (task) => {
        if (user) {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const { data } = await axios.post('/api/tasks', task, config);
            setTasks([...tasks, data]);
        }
    };

    const updateTask = async (task) => {
        if (user) {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const { data } = await axios.put(`/api/tasks/${task._id}`, task, config);
            setTasks(tasks.map((t) => (t._id === data._id ? data : t)));
        }
    };

    const deleteTask = async (id) => {
        if (user) {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            await axios.delete(`/api/tasks/${id}`, config);
            setTasks(tasks.filter((task) => task._id !== id));
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, getTasks, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
