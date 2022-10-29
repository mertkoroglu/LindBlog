import {React, useState} from 'react'
import "./Compose.css";
import {TextField, Typography, Grid, Card, CardContent, Button} from "@mui/material";
import { useEffect } from 'react';
import {useDispatch} from "react-redux";
import { createPost } from '../../actions/posts';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Compose = ({refresh}) => {
  const [post, setPost] = useState({title: "", content: "", tags: []});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clear = () => {
    setPost({title: "", content: "", tags: []});
  }

  const submit = (e) => {
    e.preventDefault();
    if(post.title !== "" && post.content !== ""){  
      dispatch(createPost(post));
      clear();
      refresh(true);
      alert("Post is Successfully Created!");
    }else{
      alert("Title or Content cannot be empty");
    }
  }

  return (
    <div id='compose'>
      <Navigation/>
      <form autoComplete="off" noValidate  onSubmit={submit}>
        <Card style={{maxWidth:800, margin:"0 auto", padding:"20px 5px"}}>
          <CardContent>
            <Typography style={{textAlign: "center"}} gutterBottom variant='h5'>Compose a Post</Typography>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                  <TextField
                      name='title'
                      id="outlined-multiline-static"
                      label="Title"
                      multiline
                      rows={1}
                      onChange={(e) => setPost({ ...post, title: e.target.value})}
                      className="title"
                      fullWidth
                      required
                      value={post.title}
                  />
              </Grid>
              <Grid xs={12} item>
                  <TextField
                      name='content'
                      id="outlined-multiline-static"
                      label="Content"
                      multiline
                      rows={4}
                      onChange={(e) => setPost({ ...post, content: e.target.value})}
                      className="content"
                      required
                      fullWidth
                      value={post.content}
                  />
              </Grid>
              <Grid xs={12} item>
                  <TextField
                      name='tags'
                      id="outlined-multiline-static"
                      label="Tags"
                      multiline
                      rows={1}
                      onChange={(e) => setPost({ ...post, tags: e.target.value.split(',')})}
                      className="tags"
                      fullWidth
                      required
                      value={post.tags}
                  />
              </Grid>
              <Grid xs={12} sm={6} item><Button fullWidth id='clear' onClick={() => clear()}>Clear</Button></Grid>
              <Grid xs={12} sm={6} item><Button fullWidth id='submit' type='submit'>Submit</Button></Grid>
            </Grid>
            </CardContent>
        </Card>
        </form>
    </div>
  )
}

export default Compose;