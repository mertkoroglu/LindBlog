import React from 'react'
import { Button, Toolbar, AppBar } from '@mui/material'
import "./Navigation.css";
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
        <AppBar position='fixed' sx={{backgroundColor: "white", borderBottom: "3px solid black"}}>
            <Toolbar>
                <Link to='/' className='link title' color="inherit">LiND</Link>
                <div className='navLinks'>
                        <Link to='/posts' className='link alt' color="inherit">Posts</Link>
                        <Link to='/compose' className='link alt' color="inherit">Compose</Link>
                </div>
            </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navigation