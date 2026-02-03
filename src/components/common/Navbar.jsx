import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHotel, FaBell, FaUserCircle, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onToggleSidebar }) => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <button 
                    className="mobile-menu-toggle" 
                    onClick={onToggleSidebar}
                    aria-label="Toggle menu"
                >
                    <FaBars />
                </button>
                <FaHotel className="navbar-logo" />
                <span className="navbar-title">Hotel Management</span>
            </div>

            <div className="navbar-links">
                <Link to="/" className="nav-link">Dashboard</Link>
                <Link to="/rooms" className="nav-link">Rooms</Link>
                <Link to="/bookings" className="nav-link">Bookings</Link>
                <Link to="/guests" className="nav-link">Guests</Link>
                <Link to="/staff" className="nav-link">Staff</Link>
            </div>

            <div className="navbar-actions">
                <button className="navbar-btn" aria-label="Notifications">
                    <FaBell />
                </button>
                <button className="navbar-btn" aria-label="User menu">
                    <FaUserCircle />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
