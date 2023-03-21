import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }

    axios(endpoint)
      .then((res) => setData(res.data.users ?? res.data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return {
    data,
    setData,
    loading,
    error,
  };
};

export default useFetch;
