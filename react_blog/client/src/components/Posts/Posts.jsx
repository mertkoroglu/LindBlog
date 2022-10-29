
import React from 'react'
import { useSelector } from 'react-redux'
import Post from "./Post/Post";
import "./Posts.css";
import {Drawer, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemButton, ListItemText, TextField} from "@mui/material";
import {Inbox} from "@mui/icons-material"
import Navigation from '../Navigation/Navigation';

export const colorGenerator = () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const g = randomBetween(40, 255);
    const b = randomBetween(0, 70);
    return `rgb(255,${g},${b})`;
}

const Posts = ({refresh}) => {
    const posts = useSelector((state) => state);
    const searchBar = document.getElementById("searchBar");

    console.log(posts);
    
    return (
    <div id='page'>
        <Navigation/>
        <div id='tags'>
                <Drawer
                    sx={{
                    width: "20%",
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: "20%",
                        boxSizing: 'border-box',
                        borderRight: "2px solid black"
                    },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />
                    <Divider/>
                    <div id='discover'>Discover</div>
                    <TextField 
                                id="searchBar"
                                label="Search Tags"
                                sx={{margin: "2em 1em .2em 1em", backgroundColor: "white"}}
                                focused
                                color="grey"
                    />

                    <List sx={{display: "flex", flexWrap: "wrap", marginLeft: "1em"}}>
                    {['Food', 'Art', 'Music', 'Photography', "Health", "Humor", "Travel", "Fashion", "Music", "Movies"].map((text, index) => (
                        <div id="tag" style={{backgroundColor: colorGenerator()} } onClick={() => searchBar.value=text }>
                            <div>{text}</div>
                        </div>
                    ))}
                    </List>
                    <Divider />
                </Drawer>
        </div>
        <div id='posts'>
           { posts.length ? 
           
                posts.map((post) => (
                    <Post post={post} key={post._id} refresh={refresh}/>
                )) 
                
                : 
                <div className='errorMSG'>
                    <h1>There is no posts :(</h1>
                    <p>Try adding a post from the Compose Page</p>
                </div>

            }
        </div>
    </div>
        
    );
}

export default Posts;