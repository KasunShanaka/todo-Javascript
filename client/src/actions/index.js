import * as api from '../api';

export const getTasks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTasks();
        dispatch({
            type: 'FETCH_ALL',
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const createTasks = (taskData) => async (dispatch) => {
    try {
        await api.createTask(taskData);
        console.log("sending data", taskData)
        dispatch({
            type: 'CREATE',
            payload: taskData,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTasks = (_id) => async (dispatch) => {
    try {
        await api.deleteTask(_id);
        console.log("Deleting id", _id)
        dispatch({
            type: 'DELETE',
            payload: _id,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTasks = (_id) => async (dispatch) => {
    try {
        await api.updateTask(_id);
        console.log("Deleting id", _id)
        dispatch({
            type: 'UPDATE',
            payload: _id,
        });
    } catch (error) {
        console.log(error.message);
    }
}