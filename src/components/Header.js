import React from 'react';
import { Nav} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import '../styles/Header.css'



let Header=(props)=>
    <Nav className="justify-content-center" activeKey="/home">

                <Link id="link" className="nav-link" to="/AllCoctails">All cocktails</Link>
                <Link id="link" className="nav-link" to="/home">Home</Link>
                <Link id="link" className="nav-link" to="/surprise">Surprise me!</Link>

    </Nav>;

export default Header;