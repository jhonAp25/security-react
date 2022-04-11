import React from 'react'
import { Routes, Route, Outlet, Link, BrowserRouter as Router } from 'react-router-dom';

const Header = () => {
  return (
    <div>
         <Link to="/">Home</Link>
         <Link to="/login">Login</Link>
    </div>
  )
}

export default Header