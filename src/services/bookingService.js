import api from './api';

export const bookingService = {
    getAll: () => api.get('/bookings'),
    getById: (id) => api.get(`/bookings/${id}`),
    create: (data) => api.post('/bookings', data),
    update: (id, data) => api.put(`/bookings/${id}`, data),
    delete: (id) => api.delete(`/bookings/${id}`),
    getByGuest: (guestId) => api.get(`/bookings/guest/${guestId}`),
    checkIn: (id) => api.put(`/bookings/${id}/checkin`),
    checkOut: (id) => api.put(`/bookings/${id}/checkout`),
};

export default bookingService;
