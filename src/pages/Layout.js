import React from 'react';
import {Container} from "react-bootstrap";
import Header from "../components/Header";

let Layout = (props) =>
    <div>
        <Header/>
        <Container id="container"/>
        {props.children}
    </div>;

export default Layout;