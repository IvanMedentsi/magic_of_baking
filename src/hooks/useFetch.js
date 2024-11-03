import { useEffect, useState } from 'react'; 

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(''); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(''); 

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); 
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message); 
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error }; 
};

export default useFetch;
