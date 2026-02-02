import React from 'react';
import { FaBed, FaCalendarCheck, FaUsers, FaDollarSign } from 'react-icons/fa';
import './Dashboard.css';

const statsData = [
    { icon: <FaBed />, label: 'Total Rooms', value: '150', color: '#e94560' },
    { icon: <FaCalendarCheck />, label: 'Bookings Today', value: '24', color: '#00d4aa' },
    { icon: <FaUsers />, label: 'Active Guests', value: '89', color: '#7c3aed' },
    { icon: <FaDollarSign />, label: 'Revenue', value: '$12,450', color: '#f59e0b' },
];

const recentBookings = [
    { id: 1, guest: 'John Doe', room: '101', checkIn: '2026-02-01', status: 'Confirmed' },
    { id: 2, guest: 'Jane Smith', room: '202', checkIn: '2026-02-01', status: 'Pending' },
    { id: 3, guest: 'Mike Johnson', room: '305', checkIn: '2026-02-02', status: 'Confirmed' },
    { id: 4, guest: 'Sarah Williams', room: '108', checkIn: '2026-02-02', status: 'Checked In' },
];

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <p>Welcome back! Here's what's happening today.</p>
            </div>

            <div className="stats-grid">
                {statsData.map((stat, index) => (
                    <div key={index} className="stat-card" style={{ '--accent-color': stat.color }}>
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-info">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-content">
                <div className="dashboard-section">
                    <h2>Recent Bookings</h2>
                    <div className="bookings-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Guest</th>
                                    <th>Room</th>
                                    <th>Check In</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentBookings.map((booking) => (
                                    <tr key={booking.id}>
                                        <td>{booking.guest}</td>
                                        <td>{booking.room}</td>
                                        <td>{booking.checkIn}</td>
                                        <td>
                                            <span className={`status-badge ${booking.status.toLowerCase().replace(' ', '-')}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dashboard-section">
                    <h2>Room Availability</h2>
                    <div className="availability-chart">
                        <div className="availability-item">
                            <span className="availability-label">Available</span>
                            <div className="availability-bar">
                                <div className="availability-fill available" style={{ width: '60%' }}></div>
                            </div>
                            <span className="availability-value">61 rooms</span>
                        </div>
                        <div className="availability-item">
                            <span className="availability-label">Occupied</span>
                            <div className="availability-bar">
                                <div className="availability-fill occupied" style={{ width: '35%' }}></div>
                            </div>
                            <span className="availability-value">89 rooms</span>
                        </div>
                        <div className="availability-item">
                            <span className="availability-label">Maintenance</span>
                            <div className="availability-bar">
                                <div className="availability-fill maintenance" style={{ width: '5%' }}></div>
                            </div>
                            <span className="availability-value">5 rooms</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
