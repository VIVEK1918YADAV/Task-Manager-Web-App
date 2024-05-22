import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import TaskProvider from './contexts/TaskContext';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TaskList from './components/Task/TaskList';
import AddTask from './components/Task/AddTask';
import EditTask from './components/Task/EditTask';

const App = () => {
    return (
        <AuthProvider>
            <TaskProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/tasks" element={<TaskList />} />
                        <Route path="/add-task" element={<AddTask />} />
                        <Route path="/edit-task/:id" element={<EditTask />} />
                    </Routes>
                </Router>
            </TaskProvider>
        </AuthProvider>
    );
};

export default App;
