import React from 'react'
import "./Landing.css";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import Post from "../Posts/Post/Post";

const Landing = () => {

  const posts = useSelector((state) => state.slice(0, 4));

  return (
    <div className='Landing'>
      <Typography>Landing</Typography>

      {     posts.map((post) => (
                <Post key={post} post={post}/>
            ))
      }

    </div>
  )
}

export default Landing