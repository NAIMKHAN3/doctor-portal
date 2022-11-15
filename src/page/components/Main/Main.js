import React from 'react';
import { Outlet } from 'react-router-dom';
import Foter from '../Share/Foter/Foter';
import Navbar from '../Share/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Foter></Foter>
        </div>
    );
};

export default Main;