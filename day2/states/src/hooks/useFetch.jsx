import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(endpoint)
      .then((res) => setData(res.data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
