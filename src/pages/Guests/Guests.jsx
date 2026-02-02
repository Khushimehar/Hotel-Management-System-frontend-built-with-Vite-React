import React, { useState } from 'react';
import { FaPlus, FaEye, FaEdit, FaTrash, FaSearch, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Guests.css';

const initialGuests = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234-567-8901', visits: 5, status: 'VIP' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234-567-8902', visits: 2, status: 'Regular' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '+1 234-567-8903', visits: 8, status: 'VIP' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', phone: '+1 234-567-8904', visits: 1, status: 'New' },
    { id: 5, name: 'David Brown', email: 'david@example.com', phone: '+1 234-567-8905', visits: 3, status: 'Regular' },
];

const Guests = () => {
    const [guests, setGuests] = useState(initialGuests);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredGuests = guests.filter(guest =>
        guest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guest.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="guests-page">
            <div className="page-header">
                <div>
                    <h1>Guests</h1>
                    <p>Manage guest information and profiles</p>
                </div>
                <button className="btn-primary">
                    <FaPlus /> Add Guest
                </button>
            </div>

            <div className="guests-filters">
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search guests..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="guests-grid">
                {filteredGuests.map((guest) => (
                    <div key={guest.id} className="guest-card">
                        <div className="guest-avatar">
                            {guest.name.charAt(0)}
                        </div>
                        <div className="guest-info">
                            <h3>{guest.name}</h3>
                            <span className={`guest-status ${guest.status.toLowerCase()}`}>{guest.status}</span>
                        </div>
                        <div className="guest-contact">
                            <div className="contact-item">
                                <FaEnvelope />
                                <span>{guest.email}</span>
                            </div>
                            <div className="contact-item">
                                <FaPhone />
                                <span>{guest.phone}</span>
                            </div>
                        </div>
                        <div className="guest-stats">
                            <span className="stat-label">Visits</span>
                            <span className="stat-value">{guest.visits}</span>
                        </div>
                        <div className="guest-actions">
                            <button className="action-btn view"><FaEye /></button>
                            <button className="action-btn edit"><FaEdit /></button>
                            <button className="action-btn delete"><FaTrash /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Guests;
