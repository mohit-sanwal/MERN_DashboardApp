import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const PrivateComponent = () => {
    const user = JSON.parse(localStorage.getItem('userData'))
    return user?.email ? <Outlet /> : <Navigate to="/signup" />
}


export default PrivateComponent;