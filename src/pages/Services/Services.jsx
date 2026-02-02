import React from 'react';
import { FaConciergeBell, FaUtensils, FaSpa, FaCar, FaWifi, FaSwimmingPool } from 'react-icons/fa';
import './Services.css';

const servicesData = [
    { id: 1, name: 'Room Service', icon: <FaConciergeBell />, price: '$25/order', status: 'Active', description: '24/7 in-room dining service' },
    { id: 2, name: 'Restaurant', icon: <FaUtensils />, price: '$50-150', status: 'Active', description: 'Fine dining experience' },
    { id: 3, name: 'Spa & Wellness', icon: <FaSpa />, price: '$100/session', status: 'Active', description: 'Relaxing spa treatments' },
    { id: 4, name: 'Valet Parking', icon: <FaCar />, price: '$20/day', status: 'Active', description: 'Secure valet parking service' },
    { id: 5, name: 'High-Speed WiFi', icon: <FaWifi />, price: 'Free', status: 'Active', description: 'Complimentary high-speed internet' },
    { id: 6, name: 'Swimming Pool', icon: <FaSwimmingPool />, price: 'Free', status: 'Maintenance', description: 'Indoor heated swimming pool' },
];

const Services = () => {
    return (
        <div className="services-page">
            <div className="page-header">
                <div>
                    <h1>Hotel Services</h1>
                    <p>Manage available services and amenities</p>
                </div>
            </div>

            <div className="services-grid">
                {servicesData.map((service) => (
                    <div key={service.id} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <div className="service-info">
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                        </div>
                        <div className="service-footer">
                            <span className="service-price">{service.price}</span>
                            <span className={`service-status ${service.status.toLowerCase()}`}>
                                {service.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
