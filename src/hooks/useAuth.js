// useAuth.js
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { auth } from '../firebase'; 

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const login = async (credentials) => {
        setLoading(true);
        setError('');
        try {
            await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};

export default useAuth;
