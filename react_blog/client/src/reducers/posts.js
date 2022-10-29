const posts = (state = [], action) => {
    switch(action.type){
        case "FETCH":
            return action.payload;
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.filter((post) => post._id !== action.payload);
        default:
            return state;
    }
}

export default posts;