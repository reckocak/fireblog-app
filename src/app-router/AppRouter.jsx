import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import UpdateBlog from "../pages/UpdateBlog";
import PrivateRouter from "./PrivateRouter";



const AppRouter = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newblog" element={<NewBlog/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/register" element={<Register />} />        
        <Route path="/updateblog" element={<UpdateBlog/>} />
        <Route path="/details" element={<PrivateRouter />}>
           <Route path="" element={<Details />} />
           </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default AppRouter;
