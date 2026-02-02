import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaUserTie } from 'react-icons/fa';
import './Staff.css';

const initialStaff = [
    { id: 1, name: 'Robert Taylor', role: 'Manager', department: 'Administration', status: 'Active', shift: 'Morning' },
    { id: 2, name: 'Emily Davis', role: 'Receptionist', department: 'Front Desk', status: 'Active', shift: 'Morning' },
    { id: 3, name: 'James Wilson', role: 'Housekeeping', department: 'Housekeeping', status: 'Active', shift: 'Afternoon' },
    { id: 4, name: 'Lisa Anderson', role: 'Chef', department: 'Kitchen', status: 'Active', shift: 'Morning' },
    { id: 5, name: 'Tom Martinez', role: 'Security', department: 'Security', status: 'On Leave', shift: 'Night' },
];

const Staff = () => {
    const [staff, setStaff] = useState(initialStaff);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredStaff = staff.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="staff-page">
            <div className="page-header">
                <div>
                    <h1>Staff Management</h1>
                    <p>Manage hotel staff and their assignments</p>
                </div>
                <button className="btn-primary">
                    <FaPlus /> Add Staff
                </button>
            </div>

            <div className="staff-filters">
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search staff..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="staff-grid">
                {filteredStaff.map((member) => (
                    <div key={member.id} className="staff-card">
                        <div className="staff-header">
                            <div className="staff-avatar">
                                <FaUserTie />
                            </div>
                            <span className={`staff-status ${member.status.toLowerCase().replace(' ', '-')}`}>
                                {member.status}
                            </span>
                        </div>
                        <div className="staff-info">
                            <h3>{member.name}</h3>
                            <span className="staff-role">{member.role}</span>
                        </div>
                        <div className="staff-details">
                            <div className="detail-item">
                                <span className="detail-label">Department</span>
                                <span className="detail-value">{member.department}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Shift</span>
                                <span className="detail-value">{member.shift}</span>
                            </div>
                        </div>
                        <div className="staff-actions">
                            <button className="action-btn edit"><FaEdit /></button>
                            <button className="action-btn delete"><FaTrash /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Staff;
