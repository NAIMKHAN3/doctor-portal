import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContex } from '../../../../UserContext/UserContext';
import Navbar from '../../Share/Navbar/Navbar';
import useAdmin from '../Hook/useAdmin';

const DeshboardLayout = () => {
    const { user } = useContext(AuthContex);
    const [isAdmin] = useAdmin(user?.email)
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
                        {
                            isAdmin && <li><Link to='/deshboard/alluser'>All User</Link></li>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DeshboardLayout;