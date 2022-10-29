import React from 'react'
import "./Post.css";
import {Card, CardContent, Typography, CardActions, Button, Box, CardMedia, Avatar} from "@mui/material";
import { Link } from 'react-router-dom';
import testIMG from "../../../images/test.png";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { colorGenerator } from '../Posts';
import {deletePost} from "../../../actions/posts";
import { useDispatch } from 'react-redux';

const Post = ({post, refresh}) => {
  const dispatch = useDispatch();

  let title = "" + post.title + "";
  let content = "" + post.content + "";
  let tags = post.tags;

  if(title.length > 40){
    title = title.slice(0,40) + "...";
  }
  if(content.length > 50){
    content = content.slice(0,50) + "...";
  }

  return (
    <div className='card'>
      <div className='left'>
        <div className='user'>
          <Avatar className='avatar' sx={{width: "30px", height: "30px"}}></Avatar>
          <div className='name'>Mert Köroğlu</div>
          <DeleteOutlineIcon id="delete"  onClick={() => {dispatch(deletePost(post._id)); refresh(true); alert("Post has been deleted")}}/>
        </div>
        <div className='title'>{title}</div>
        <div className='content'>{content}</div>
        <div className='tags'>
          {tags.map((tag) => (
              <div className='tag' style={{backgroundColor: colorGenerator()}}>{tag}</div>
          ))}
        </div>
        <div className='bottom'>
          <span className='createdAt'>{post.createdAt}</span>
          <Button id='button' component={Link} to={"/" + post._id}>Read More</Button>
        </div>
      </div>
      <div className='right'>
        
      </div>
      </div>
  )
}

export default Post;