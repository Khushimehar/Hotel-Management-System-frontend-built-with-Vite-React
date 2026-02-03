import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaHome,
    FaBed,
    FaCalendarAlt,
    FaUsers,
    FaUserTie,
    FaCog,
    FaChartBar,
    FaConciergeBell,
    FaFileInvoiceDollar,
    FaTimes
} from 'react-icons/fa';
import './Sidebar.css';

const menuItems = [
    { path: '/', icon: <FaHome />, label: 'Dashboard' },
    { path: '/rooms', icon: <FaBed />, label: 'Rooms' },
    { path: '/bookings', icon: <FaCalendarAlt />, label: 'Bookings' },
    { path: '/guests', icon: <FaUsers />, label: 'Guests' },
    { path: '/staff', icon: <FaUserTie />, label: 'Staff' },
    { path: '/services', icon: <FaConciergeBell />, label: 'Services' },
    { path: '/billing', icon: <FaFileInvoiceDollar />, label: 'Billing' },
    { path: '/reports', icon: <FaChartBar />, label: 'Reports' },
    { path: '/settings', icon: <FaCog />, label: 'Settings' },
];

const Sidebar = ({ isOpen, onClose }) => {
    const handleLinkClick = () => {
        // Close sidebar on mobile after navigation
        if (window.innerWidth <= 768 && onClose) {
            onClose();
        }
    };

    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`sidebar-overlay ${isOpen ? 'visible' : ''}`}
                onClick={onClose}
            />

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                {/* Close button for mobile */}
                <button
                    className="sidebar-close"
                    onClick={onClose}
                    aria-label="Close menu"
                >
                    <FaTimes />
                </button>

                <div className="sidebar-menu">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                            onClick={handleLinkClick}
                        >
                            <span className="sidebar-icon">{item.icon}</span>
                            <span className="sidebar-label">{item.label}</span>
                        </NavLink>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
