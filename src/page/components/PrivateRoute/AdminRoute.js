import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../../UserContext/UserContext';
import useAdmin from '../Deshboard/Hook/useAdmin';

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const { user, isLoading } = useContext(AuthContex);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    if (isLoading || isAdminLoading) {
        return <h1 className='text-center font-bold text-3xl'>Loading.....</h1>
    }
    if (user && isAdmin) {
        return children;
    }
    return (
        <h1 className='font-bold text-4xl pt-48 pl-10'>This Route is Only Admin Access</h1>
    );
};

export default AdminRoute;