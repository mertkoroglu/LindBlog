import Posts from "../models/Post.js"
import moment from "moment";

export const getPosts = async (req,res) => {    
    try{
        const posts = await Posts.find();

        console.log(posts);
        res.status(200).json(posts);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}


export const addPost = async (req,res) => {
    const post = req.body;

    const newPost = new Posts({...post, createdAt: moment().format("MMM Do YY")});

    try{    
        await newPost.save();

        res.status(201).json(newPost);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}


export const deletePost = async (req,res) => {
    const {id} = req.params;
    const post = await Posts.findByIdAndRemove(id);

    try{    
        res.status(201).json(post);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}
