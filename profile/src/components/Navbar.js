import React from 'react'
import '../App.css'
import { VscAccount } from "react-icons/vsc";
import { useState } from 'react';
import { Reorder } from '@material-ui/icons';

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(true)

  return (
    <div className='navbar'>
        <div className='leftSide'>
            <a href='/home'><VscAccount className='profileIcon'/></a>
        </div>
        <div className='rightSide'>
            <div className='links' id = {showLinks ? "hidden" : ''}>
                <a href='/about'>About</a>
                <a href='/project'>Projects</a>
                <a href='/experience'>Experience</a>
                <a href='publication'>Publication</a>
            </div>
            <button onClick={() => setShowLinks(!showLinks)}>
              Open
            </button>
        </div>
    </div>
  )
}

export default Navbar