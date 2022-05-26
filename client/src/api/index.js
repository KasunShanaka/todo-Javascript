import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchTasks = () => axios.get(url);
export const createTask = (newTask) => axios.post(url, newTask);
export const deleteTask = (id) => axios.delete(url, id);
export const updateTask = (id) => axios.post(url, id);