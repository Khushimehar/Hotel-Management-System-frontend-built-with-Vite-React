import React, { useState } from 'react';
import { FaSave, FaHotel, FaBell, FaLock, FaPalette } from 'react-icons/fa';
import './Settings.css';

const Settings = () => {
    const [settings, setSettings] = useState({
        hotelName: 'Grand Plaza Hotel',
        email: 'info@grandplaza.com',
        phone: '+1 234-567-8900',
        address: '123 Main Street, City, Country',
        currency: 'USD',
        timezone: 'UTC-5',
        notifications: true,
        darkMode: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="settings-page">
            <div className="page-header">
                <div>
                    <h1>Settings</h1>
                    <p>Manage your hotel settings and preferences</p>
                </div>
            </div>

            <div className="settings-grid">
                <div className="settings-section">
                    <div className="section-header">
                        <FaHotel />
                        <h2>Hotel Information</h2>
                    </div>
                    <div className="settings-form">
                        <div className="form-group">
                            <label>Hotel Name</label>
                            <input
                                type="text"
                                name="hotelName"
                                value={settings.hotelName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={settings.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={settings.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea
                                name="address"
                                value={settings.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <div className="section-header">
                        <FaPalette />
                        <h2>Preferences</h2>
                    </div>
                    <div className="settings-form">
                        <div className="form-group">
                            <label>Currency</label>
                            <select name="currency" value={settings.currency} onChange={handleChange}>
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="GBP">GBP (£)</option>
                                <option value="INR">INR (₹)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Timezone</label>
                            <select name="timezone" value={settings.timezone} onChange={handleChange}>
                                <option value="UTC-5">Eastern Time (UTC-5)</option>
                                <option value="UTC-8">Pacific Time (UTC-8)</option>
                                <option value="UTC+0">GMT (UTC+0)</option>
                                <option value="UTC+5:30">IST (UTC+5:30)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <div className="section-header">
                        <FaBell />
                        <h2>Notifications</h2>
                    </div>
                    <div className="settings-form">
                        <div className="form-group toggle">
                            <label>Enable Notifications</label>
                            <input
                                type="checkbox"
                                name="notifications"
                                checked={settings.notifications}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <div className="section-header">
                        <FaLock />
                        <h2>Security</h2>
                    </div>
                    <div className="settings-form">
                        <button className="btn-secondary">Change Password</button>
                        <button className="btn-secondary">Enable 2FA</button>
                    </div>
                </div>
            </div>

            <div className="settings-actions">
                <button className="btn-primary">
                    <FaSave /> Save Changes
                </button>
            </div>
        </div>
    );
};

export default Settings;
