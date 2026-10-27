// Demo storage using the browser's localStorage (no backend). Passwords are NOT secure here.
const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));

export const getUser = () => read("vp_user", null);
export const findUser = (email, password) => read("vp_users", []).find((u) => u.email === email && u.password === password);
export const emailTaken = (email) => read("vp_users", []).some((u) => u.email === email);
export const register = (u) => write("vp_users", [...read("vp_users", []), u]);
export const login = (u) => write("vp_user", { name: u.name, email: u.email });
export const logout = () => localStorage.removeItem("vp_user");

export const getBookings = (email) => read("vp_bookings", []).filter((b) => b.user === email);
export const addBooking = (b) => write("vp_bookings", [b, ...read("vp_bookings", [])]);
export const cancelBooking = (id) => write("vp_bookings", read("vp_bookings", []).map((b) => (b.id === id ? { ...b, status: "Cancelled" } : b)));
export const addMessage = (m) => write("vp_messages", [...read("vp_messages", []), m]);
