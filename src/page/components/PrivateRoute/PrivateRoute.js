import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../../UserContext/UserContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, isLoading } = useContext(AuthContex);
    if (isLoading) {
        return <h1 className='text-center font-bold text-3xl'>Loading.....</h1>
    }
    if (user && user?.uid) {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;