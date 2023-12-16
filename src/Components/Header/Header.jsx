import React from 'react'
import { BrowserRouter as Router,NavLink,Route,Routes} from "react-router-dom";
import './Header.scss'

export default function Header() {
  return (
    <nav>
      <NavLink className='href' to='/'>Info</NavLink>
      <NavLink className='href' to='/cards'>Cards</NavLink>
      <NavLink className='href' to='/create'>Create</NavLink>
    </nav>
  )
}
