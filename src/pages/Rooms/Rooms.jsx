import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import './Rooms.css';

const initialRooms = [
    { id: 1, number: '101', type: 'Deluxe', capacity: 2, price: 150, status: 'Available' },
    { id: 2, number: '102', type: 'Suite', capacity: 4, price: 300, status: 'Occupied' },
    { id: 3, number: '103', type: 'Standard', capacity: 2, price: 100, status: 'Available' },
    { id: 4, number: '201', type: 'Deluxe', capacity: 2, price: 150, status: 'Maintenance' },
    { id: 5, number: '202', type: 'Suite', capacity: 4, price: 300, status: 'Available' },
    { id: 6, number: '203', type: 'Standard', capacity: 2, price: 100, status: 'Occupied' },
];

const Rooms = () => {
    const [rooms, setRooms] = useState(initialRooms);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredRooms = rooms.filter(room =>
        room.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="rooms-page">
            <div className="page-header">
                <div>
                    <h1>Rooms Management</h1>
                    <p>Manage your hotel rooms and their status</p>
                </div>
                <button className="btn-primary">
                    <FaPlus /> Add Room
                </button>
            </div>

            <div className="rooms-filters">
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search rooms..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="filter-buttons">
                    <button className="filter-btn active">All</button>
                    <button className="filter-btn">Available</button>
                    <button className="filter-btn">Occupied</button>
                    <button className="filter-btn">Maintenance</button>
                </div>
            </div>

            <div className="rooms-grid">
                {filteredRooms.map((room) => (
                    <div key={room.id} className="room-card">
                        <div className="room-header">
                            <span className="room-number">Room {room.number}</span>
                            <span className={`room-status ${room.status.toLowerCase()}`}>
                                {room.status}
                            </span>
                        </div>
                        <div className="room-body">
                            <div className="room-info">
                                <span className="room-type">{room.type}</span>
                                <span className="room-capacity">{room.capacity} Guests</span>
                            </div>
                            <div className="room-price">
                                <span className="price-value">${room.price}</span>
                                <span className="price-label">per night</span>
                            </div>
                        </div>
                        <div className="room-actions">
                            <button className="action-btn edit">
                                <FaEdit />
                            </button>
                            <button className="action-btn delete">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rooms;
