// src/utils/DecodeJWT.js
import {jwtDecode} from 'jwt-decode';

export const DecodeJWT = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded;  // Return decoded user information
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
};
