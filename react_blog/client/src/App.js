
import Home from "./components/Home/Home";
import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getPosts } from "../src/actions/posts";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
    setRefresh(false);
  }, [refresh]);

  return (
    <div className="App">
        {loggedIn ? <Home refresh={setRefresh}/> : <HomePage refresh={setRefresh}/>}
    </div>
  );
}

export default App;
