import React, { createContext, useContext, useState } from 'react';

const HotelContext = createContext(null);

export const HotelProvider = ({ children }) => {
    const [rooms, setRooms] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [guests, setGuests] = useState([]);
    const [loading, setLoading] = useState(false);

    const value = {
        rooms,
        setRooms,
        bookings,
        setBookings,
        guests,
        setGuests,
        loading,
        setLoading,
    };

    return (
        <HotelContext.Provider value={value}>
            {children}
        </HotelContext.Provider>
    );
};

export const useHotel = () => {
    const context = useContext(HotelContext);
    if (!context) {
        throw new Error('useHotel must be used within a HotelProvider');
    }
    return context;
};

export default HotelContext;
