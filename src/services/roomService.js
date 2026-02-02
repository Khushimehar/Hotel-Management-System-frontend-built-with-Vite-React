import api from './api';

export const roomService = {
    getAll: () => api.get('/rooms'),
    getById: (id) => api.get(`/rooms/${id}`),
    create: (data) => api.post('/rooms', data),
    update: (id, data) => api.put(`/rooms/${id}`, data),
    delete: (id) => api.delete(`/rooms/${id}`),
    getAvailable: (checkIn, checkOut) => api.get('/rooms/available', { params: { checkIn, checkOut } }),
};

export default roomService;
