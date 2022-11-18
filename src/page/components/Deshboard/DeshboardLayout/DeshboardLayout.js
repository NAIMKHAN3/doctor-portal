import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Share/Navbar/Navbar';

const DeshboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="deshboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="deshboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/deshboard'>My Appoinment</Link></li>
                        <li><Link to='/deshboard/alluser'>All User</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DeshboardLayout;