import React from 'react';
import './App.css';
import Layout from "./pages/Layout";
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from "./router/Routes";

function App() {
    return (

        <Router>
            <Layout>

            </Layout>

            <Routes/>

        </Router>
    );
}

export default App;
