import { useState } from 'react';

const useOrder = () => {
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState('');
    const [error, setError] = useState('');

    const createOrder = async (orderData) => {
        setLoading(true); 
        try {
            const response = await fetch('/api/orders', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(orderData), 
            });

            if (!response.ok) {
                throw new Error('Order creation failed'); 
            }

            const data = await response.json(); 
            setOrder(data); 
        } catch (error) {
            setError(error.message); 
        } finally {
            setLoading(false);
        }
    };

    return { createOrder, loading, order, error };
};

export default useOrder;
