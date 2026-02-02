import React from 'react';
import { FaChartLine, FaChartBar, FaChartPie, FaDownload } from 'react-icons/fa';
import './Reports.css';

const Reports = () => {
    return (
        <div className="reports-page">
            <div className="page-header">
                <div>
                    <h1>Reports & Analytics</h1>
                    <p>View detailed reports and insights</p>
                </div>
            </div>

            <div className="reports-grid">
                <div className="report-card">
                    <div className="report-icon">
                        <FaChartLine />
                    </div>
                    <div className="report-info">
                        <h3>Occupancy Report</h3>
                        <p>View room occupancy trends and statistics</p>
                    </div>
                    <button className="report-btn">
                        <FaDownload /> Generate
                    </button>
                </div>

                <div className="report-card">
                    <div className="report-icon revenue">
                        <FaChartBar />
                    </div>
                    <div className="report-info">
                        <h3>Revenue Report</h3>
                        <p>Financial summary and revenue breakdown</p>
                    </div>
                    <button className="report-btn">
                        <FaDownload /> Generate
                    </button>
                </div>

                <div className="report-card">
                    <div className="report-icon bookings">
                        <FaChartPie />
                    </div>
                    <div className="report-info">
                        <h3>Bookings Report</h3>
                        <p>Booking patterns and peak season analysis</p>
                    </div>
                    <button className="report-btn">
                        <FaDownload /> Generate
                    </button>
                </div>

                <div className="report-card">
                    <div className="report-icon guests">
                        <FaChartLine />
                    </div>
                    <div className="report-info">
                        <h3>Guest Analytics</h3>
                        <p>Guest demographics and preferences</p>
                    </div>
                    <button className="report-btn">
                        <FaDownload /> Generate
                    </button>
                </div>
            </div>

            <div className="quick-stats">
                <h2>Quick Statistics</h2>
                <div className="stats-grid">
                    <div className="quick-stat-card">
                        <span className="quick-stat-value">78%</span>
                        <span className="quick-stat-label">Avg. Occupancy Rate</span>
                    </div>
                    <div className="quick-stat-card">
                        <span className="quick-stat-value">4.5</span>
                        <span className="quick-stat-label">Avg. Stay Duration (days)</span>
                    </div>
                    <div className="quick-stat-card">
                        <span className="quick-stat-value">$185</span>
                        <span className="quick-stat-label">Avg. Daily Rate</span>
                    </div>
                    <div className="quick-stat-card">
                        <span className="quick-stat-value">92%</span>
                        <span className="quick-stat-label">Guest Satisfaction</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
