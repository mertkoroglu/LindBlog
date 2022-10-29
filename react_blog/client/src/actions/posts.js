import * as api from "../api";

export const getPosts = () => async (dispatch) => {
    try{
        // data is posts in the database
        const { data } = await api.fetchPosts();

        dispatch({type: "FETCH", payload: data});
    }catch(error){
        console.log(error);
    }
}

export const createPost = (data) => async (dispatch) => {
    try{
        // data is posts in the database
        const { post } = await api.createPost(data);

        dispatch({type: "ADD", payload: post});
    }catch(error){
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        // data is posts in the database
        await api.deletePost(id);

        dispatch({type: "DELETE"});
    }catch(error){
        console.log(error);
    }
}