export const reHydrateStore = () => {
    if (localStorage.getItem('ToDoStore') !== null) {
        return JSON.parse(localStorage.getItem('ToDoStore')); 
    }
};
