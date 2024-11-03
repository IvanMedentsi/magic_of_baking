import { useState } from 'react';

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error_, setError] = useState(''); // Initialize as an empty string

    const login = async (credentials) => {
        setLoading(true);
        setError(''); // Reset error to an empty string before the request
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            if (!response.ok) {
                throw new Error('Failed to log in');
            }
            // Handle success, e.g., store token
        } catch (error_) {
            setError(error_.message); // Use error_.message
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error_ }; // Return error_ instead of error
};

export default useAuth;
