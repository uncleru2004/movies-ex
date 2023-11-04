import { memo } from "react";
import { selectedFetcher } from "../components/fetcher";
import Cards from "../components/Cards";
import useSWR from "swr";

export default memo(function Selected() {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "https://localhost:3333/movies",
    selectedFetcher
  );
  //console.log(data);

  async function onClick(event) {
    event.preventDefault();
    let optimisticData;

    if (event.target.id === "delete") {
      const movieID = event.target.closest("div").id;

      const promise = (() => {
        optimisticData = data.filter((item) => item.id != movieID);
        return fetch("http://localhost:3333/movies/" + +movieID, {
          method: "DELETE",
        });
      })();

      if (promise)
        await mutate(promise.then(selectedFetcher), {
          optimisticData,
          populateCache: true,
          revalidate: false,
        });
    }
  }

  return (
    <div className="container" onClick={() => onClick(event)}>
      {data && <Cards movies={data} selected={true} />}
    </div>
  );
});
