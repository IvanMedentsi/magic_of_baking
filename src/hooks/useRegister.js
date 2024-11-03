import { useState } from 'react';

const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const register = async (credentials) => {
        setLoading(true);
        setError(undefined); // Скидаємо попередню помилку
        setSuccess(undefined); // Скидаємо попередній успіх
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const result = await response.json();
            setSuccess(result.message); // Можливо, вам потрібно буде адаптувати
        } catch (error_) {
            setError(error_.message);
        } finally {
            setLoading(false);
        }
    };

    return { register, loading, error, success };
};

export default useRegister;
