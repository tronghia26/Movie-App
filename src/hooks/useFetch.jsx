/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const DEFAULT_HEADERS = {
  accept: 'application/json',
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
};

export default function useFetch(
  { url = '', method = 'GET', headers = {} },
  { enabled } = { enabled: true },
) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (enabled) {
      setIsLoading(true);
      fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
        method,
        headers: {
          ...DEFAULT_HEADERS,
          ...headers, // ghi đè lại dữ liệu của DEFAULT_HEADERS
        },
      })
        .then(async (res) => {
          const data = await res.json();
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [url, method, JSON.stringify(headers), enabled]);
  //JSON.stringify(headers) chỉ so sánh giá trị chứ không so sánh địa chỉ của obj

  return { isLoading, data };
}
