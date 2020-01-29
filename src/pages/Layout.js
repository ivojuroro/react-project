import React from 'react';
import {Container} from "react-bootstrap";

let Layout = (props) =>
    <div>
        <Container id="container" style={{marginTop: "100px"}}>

        </Container>
        {props.children}
    </div>;

export default Layout;