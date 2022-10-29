import mongoose from "mongoose";
import moment from "moment";

const PostSchema = mongoose.Schema({
    title: {type: String},
    content: {type: String},
    tags: {type: [String]},
    createdAt: {
        type: String,
        default: moment().format("L")
    }
});

const Posts = mongoose.model("BlogPost", PostSchema);
export default Posts;