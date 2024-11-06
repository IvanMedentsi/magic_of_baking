import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { database } from '../firebase'; 

const useFetchData = (collectionName) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(database, collectionName));
                const fetchedData = querySnapshot.docs.map(documentSnapshot => ({
                    id: documentSnapshot.id,
                    ...documentSnapshot.data()
                }));
                setData(fetchedData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [collectionName]);

    return { data, loading, error };
};

export default useFetchData;
