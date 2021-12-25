export const localStorageMiddleWare = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('ToDoStore', JSON.stringify(getState()));
        return result;
    };
};