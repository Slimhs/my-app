import React from 'react';
import { Link } from 'react-router-dom' ;

function Header () {
    return (
       <header style ={headerStyle}>
           <h1></h1>
           <img src="https://i.ibb.co/TbdK1kH/logo-link.png" ></img>
           <h1></h1>
           <Link style={LinkStyle} to="/">Accueil  </Link>   |   <Link style={LinkStyle} to="/about">  A propos</Link> 
           <p>Tél : +216 29 862 448 / 29 862 507</p>
            
           
       </header> 
    )
}

const LinkStyle = {
color: 'blue',
textDecoration: 'none' ,
}

const headerStyle = {
    background: 'white',
    color: 'grey',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'Arial',
    fontSize: '15px'
}
export default Header;