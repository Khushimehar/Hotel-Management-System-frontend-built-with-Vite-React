import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../components/common';
import './MainLayout.css';

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Navbar />
            <div className="layout-container">
                <Sidebar />
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
