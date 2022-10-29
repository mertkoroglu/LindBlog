import React from 'react'
import "./HomePage.css";
import Post from '../Posts/Post/Post';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopPosts from '../TopPosts/TopPosts';
import Posts from '../Posts/Posts';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const HomePage = ({refresh}) => {
  const posts = useSelector((state) => state.slice(0,8));
  const topPosts = useSelector((state) => state.slice(0,5));


  return (
      <div id='HomePage'>
        <div id='header'>Welcome to</div>
        <div id="top">
          <h1 id='titleLind'>LiND</h1>
        </div>
        <div id="btns">
            <Link to='/posts'><button  id='allPosts' class='btn'>All Posts</button></Link>
            <Link to='/aboutUs'><button id='about' class='btn'>About Us</button></Link>
            <Link to='/contact'><button id='contact' class='btn'>Contact</button></Link>
            <Link to='/signUp'><button id='getStarted' class='btn'>Get Started</button></Link>
        </div>
          <div id='bottom'>
              <div id='postsLind'>
                  {
                    posts.map((post) => (
                      <Post post={post} key={post._id} refresh={refresh}/>
                  )) 
                  
                  }

                  <div  id='morePosts'>
                  <Link to='/posts'><button id='btnMore'>More Posts</button></Link>
                  </div>
              </div>
              <div id='trending'>
                  <h1>Top Posts</h1>
                  {
                    topPosts.map((post, index) => (
                      <Link to={"/" + post._id} style={{textDecoration: "none", color: "inherit"}}><TopPosts post={post} index={index}/></Link>
                  ))
                  }
              </div>
          </div>
      </div>
  )
}

export default HomePage