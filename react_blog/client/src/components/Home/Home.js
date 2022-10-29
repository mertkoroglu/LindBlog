import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Posts from '../Posts/Posts';
import Compose from "../Compose/Compose";
import {useDispatch} from "react-redux";
import { useEffect } from 'react';
import { getPosts } from '../../actions/posts';

import {AppBar, Toolbar, Box, Button} from "@mui/material";
import {Create, Drafts} from "@mui/icons-material";

import {Link} from "react-router-dom";
import Landing from '../Landing/Landing';
import HomePage from '../HomePage/HomePage';
import Navigation from "../Navigation/Navigation";

const Home = ({refresh}) => {
  return (
    <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
              <Route path="/" exact element={<HomePage refresh={refresh}/>}/>
              <Route path="/posts" exact element={<Posts refresh={refresh}/>}/>
              <Route path="/compose" exact element={<Compose refresh={refresh}/>}/>
          </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default Home;