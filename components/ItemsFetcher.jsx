import { useEffect, useState } from "react";
import { fetcher } from "./fetcher";

export default function ItemsFetcher({value, param, onLoadCallback, children }) {
  
  const [data, setData] = useState(null),
    [error, setError] = useState(null);
  

  useEffect(() => {
    async function fetchItems() {
      try {
        const t = await fetcher(value, param);
        setData(t);
        onLoadCallback(t);
        setError(null);
      } catch (error) {
        setError(error);
      }
    }
    fetchItems();
  }, [onLoadCallback, value, param]);

  if (error) return <Error error={error} />;
  if (data?.Response === 'False') return <p style={{color: "red"}}>Error: {data.Error}</p>
  if (data) return <>{children}</>;
  if (typeof data === 'undefined') return <p>Movie Not Found!</p>
  
  return <Spinner />;
}

function Error({ error }) {
  return <h2>Error: {error.toString()}</h2>;
}

function Spinner() {
  
  return <p>Loading...</p>;
}
