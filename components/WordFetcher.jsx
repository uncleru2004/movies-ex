import { memo, useEffect, useState } from "react";
//import { fetcher } from "./fetcher";

export default memo(function WordFetcher({
  fetcher,
  onLoadCallback,
  onLoadCallbackVal,
  children,
}) {
  const [data, setData] = useState(null),
    [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const t = await fetcher();
        setData(t);
        onLoadCallback(t[0].word);
        onLoadCallbackVal(t[0].word);
        setError(null);
      } catch (error) {
        setError(error);
      }
    }
    fetchItems();
  }, [onLoadCallback]);

  if (error) return <Error error={error} />;
  if (data?.Response === "False")
    return <p style={{ color: "red" }}>Error: {data.Error}</p>;
  if (data) return <>{children}</>;
  //console.log(data)
  return <Spinner />;
});

function Error({ error }) {
  return <h2>Error: {error.toString()}</h2>;
}

function Spinner() {
  return <p>Loading...</p>;
}
