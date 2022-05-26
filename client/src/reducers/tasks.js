const taskReducer = (tasks = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...tasks, action.payload];
        case 'CREATE':
            return action.payload;
        case 'DELETE':
            return action.payload;
        case 'UPDATE':
            return action.payload;
        default:
            return tasks;
    }
};

export default taskReducer;