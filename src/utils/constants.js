export const ROOM_TYPES = [
    { value: 'standard', label: 'Standard' },
    { value: 'deluxe', label: 'Deluxe' },
    { value: 'suite', label: 'Suite' },
    { value: 'presidential', label: 'Presidential' },
];

export const ROOM_STATUS = [
    { value: 'available', label: 'Available', color: '#00d4aa' },
    { value: 'occupied', label: 'Occupied', color: '#e94560' },
    { value: 'maintenance', label: 'Maintenance', color: '#f59e0b' },
    { value: 'reserved', label: 'Reserved', color: '#7c3aed' },
];

export const BOOKING_STATUS = [
    { value: 'pending', label: 'Pending', color: '#f59e0b' },
    { value: 'confirmed', label: 'Confirmed', color: '#00d4aa' },
    { value: 'checked-in', label: 'Checked In', color: '#7c3aed' },
    { value: 'checked-out', label: 'Checked Out', color: '#a0aec0' },
    { value: 'cancelled', label: 'Cancelled', color: '#e94560' },
];

export const GUEST_STATUS = [
    { value: 'new', label: 'New', color: '#00d4aa' },
    { value: 'regular', label: 'Regular', color: '#60a5fa' },
    { value: 'vip', label: 'VIP', color: '#fbbf24' },
];
