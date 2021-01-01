import React from 'react';
import { Navbar } from 'react-bootstrap';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
      <Navbar className="navbar" bg="bg-transparent" >
      <Navbar.Brand>Preply</Navbar.Brand>

      <ul className="leftside-links">
        <li><Link>Find tutors</Link></li>
        <li><Link>Enterprise</Link></li>
        <li><Link>Become a tutor</Link></li>
      </ul>
      


      <ul className="rightside-icons">
      <li><Link><HelpOutlineIcon /></Link></li>
      
      
      <li><Link to="/login"><ExitToAppIcon />
      <span>Log in</span></Link></li>
      </ul>
    
      </Navbar>
    </div>
  )
}
