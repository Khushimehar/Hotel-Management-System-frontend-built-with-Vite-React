import React, { useState } from 'react';
import { FaPlus, FaEye, FaEdit, FaTrash, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import './Bookings.css';

const initialBookings = [
    { id: 1, guest: 'John Doe', room: '101', checkIn: '2026-02-01', checkOut: '2026-02-05', status: 'Confirmed', amount: 600 },
    { id: 2, guest: 'Jane Smith', room: '202', checkIn: '2026-02-01', checkOut: '2026-02-03', status: 'Pending', amount: 600 },
    { id: 3, guest: 'Mike Johnson', room: '305', checkIn: '2026-02-02', checkOut: '2026-02-07', status: 'Confirmed', amount: 750 },
    { id: 4, guest: 'Sarah Williams', room: '108', checkIn: '2026-02-02', checkOut: '2026-02-04', status: 'Checked In', amount: 300 },
    { id: 5, guest: 'David Brown', room: '401', checkIn: '2026-02-03', checkOut: '2026-02-06', status: 'Confirmed', amount: 900 },
];

const Bookings = () => {
    const [bookings, setBookings] = useState(initialBookings);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBookings = bookings.filter(booking =>
        booking.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.room.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bookings-page">
            <div className="page-header">
                <div>
                    <h1>Bookings</h1>
                    <p>Manage all hotel reservations</p>
                </div>
                <button className="btn-primary">
                    <FaPlus /> New Booking
                </button>
            </div>

            <div className="bookings-filters">
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search bookings..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="date-filter">
                    <FaCalendarAlt />
                    <span>February 2026</span>
                </div>
            </div>

            <div className="bookings-table-container">
                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Guest Name</th>
                            <th>Room</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>#{String(booking.id).padStart(4, '0')}</td>
                                <td>{booking.guest}</td>
                                <td>{booking.room}</td>
                                <td>{booking.checkIn}</td>
                                <td>{booking.checkOut}</td>
                                <td>${booking.amount}</td>
                                <td>
                                    <span className={`status-badge ${booking.status.toLowerCase().replace(' ', '-')}`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="table-actions">
                                        <button className="action-btn view"><FaEye /></button>
                                        <button className="action-btn edit"><FaEdit /></button>
                                        <button className="action-btn delete"><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
