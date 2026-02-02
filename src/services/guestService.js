import api from './api';

export const guestService = {
    getAll: () => api.get('/guests'),
    getById: (id) => api.get(`/guests/${id}`),
    create: (data) => api.post('/guests', data),
    update: (id, data) => api.put(`/guests/${id}`, data),
    delete: (id) => api.delete(`/guests/${id}`),
    search: (query) => api.get('/guests/search', { params: { q: query } }),
};

export default guestService;
