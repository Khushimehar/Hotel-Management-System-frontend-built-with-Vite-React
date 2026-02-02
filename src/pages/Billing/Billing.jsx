import React from 'react';
import { FaFileInvoiceDollar, FaDownload, FaPrint, FaEye } from 'react-icons/fa';
import './Billing.css';

const invoicesData = [
    { id: 'INV-001', guest: 'John Doe', room: '101', amount: 850, date: '2026-02-01', status: 'Paid' },
    { id: 'INV-002', guest: 'Jane Smith', room: '202', amount: 1200, date: '2026-02-01', status: 'Pending' },
    { id: 'INV-003', guest: 'Mike Johnson', room: '305', amount: 950, date: '2026-01-31', status: 'Paid' },
    { id: 'INV-004', guest: 'Sarah Williams', room: '108', amount: 450, date: '2026-01-30', status: 'Overdue' },
    { id: 'INV-005', guest: 'David Brown', room: '401', amount: 1500, date: '2026-01-30', status: 'Paid' },
];

const Billing = () => {
    return (
        <div className="billing-page">
            <div className="page-header">
                <div>
                    <h1>Billing & Invoices</h1>
                    <p>Manage payments and generate invoices</p>
                </div>
            </div>

            <div className="billing-stats">
                <div className="billing-stat-card">
                    <FaFileInvoiceDollar className="stat-icon" />
                    <div className="stat-info">
                        <span className="stat-value">$12,450</span>
                        <span className="stat-label">Total Revenue (This Month)</span>
                    </div>
                </div>
                <div className="billing-stat-card">
                    <div className="stat-info">
                        <span className="stat-value">$2,400</span>
                        <span className="stat-label">Pending Payments</span>
                    </div>
                </div>
                <div className="billing-stat-card">
                    <div className="stat-info">
                        <span className="stat-value">42</span>
                        <span className="stat-label">Invoices Generated</span>
                    </div>
                </div>
            </div>

            <div className="invoices-section">
                <h2>Recent Invoices</h2>
                <div className="invoices-table-container">
                    <table className="invoices-table">
                        <thead>
                            <tr>
                                <th>Invoice ID</th>
                                <th>Guest Name</th>
                                <th>Room</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoicesData.map((invoice) => (
                                <tr key={invoice.id}>
                                    <td>{invoice.id}</td>
                                    <td>{invoice.guest}</td>
                                    <td>{invoice.room}</td>
                                    <td>${invoice.amount}</td>
                                    <td>{invoice.date}</td>
                                    <td>
                                        <span className={`status-badge ${invoice.status.toLowerCase()}`}>
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="table-actions">
                                            <button className="action-btn view"><FaEye /></button>
                                            <button className="action-btn download"><FaDownload /></button>
                                            <button className="action-btn print"><FaPrint /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Billing;
