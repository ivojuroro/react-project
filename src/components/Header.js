import React from 'react';
import { Nav} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import '../styles/Header.css'



let Header=(props)=>
    <Nav className="justify-content-center"  activeKey="/home" id={"navbar"}>

                <Link id="link" className="nav-link" to="/allCocktails">All cocktails</Link>
                <Link id="link" className="nav-link" to="/home">Home</Link>
                <Link id="link" className="nav-link" to="/surpriseMe">Surprise me!</Link>

    </Nav>;

export default Header;