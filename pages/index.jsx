import { useState, memo } from "react";
import Cards from "../components/Cards";
import ItemsFetcher from "../components/ItemsFetcher";
import { movieFetcher } from "../components/fetcher";
import { selectedFetcher } from "../components/fetcher";
import { wordFetcher } from "../components/fetcher";
import { changeWord } from "../components/fetcher";
import WordFetcher from "../components/WordFetcher";
import useSWR from "swr";

export default memo(function Home() {
  //console.log("index rebuilt");
  const [word, setWord] = useState(),
    //[value, setValue] = useState(),
    [err, setErr] = useState(null),
    [list, setList] = useState([]),
    [inputValue, setInputValue] = useState(""),
    { data, error, isLoading, isValidating, mutate } = useSWR(
      "https://localhost:3333/movies",
      selectedFetcher
    );

  //console.log(word);

  async function onClick(event) {
    let optimisticData;

    if (event.target.id === "selected") {
      const movieID = event.target.closest("div").id;
      const selectedMovie = list.Search.filter(
        (item) => item.imdbID === movieID
      );

      setList({
        ...list,
        Search: list.Search.map((item) =>
          item.imdbID === movieID ? { ...item, selected: true } : item
        ),
      });
      console.log(list);

      const promise = (() => {
        optimisticData = data.concat(selectedMovie);

        const newObj = {
          ...selectedMovie[0],
          id: Math.max(...data.map((item) => +item.id)) + 1,
          selected: true,
        };
        //console.log(newObj);

        const findMovie = data.some((item) => item.imdbID === movieID);

        if (!findMovie) {
          return fetch("http://localhost:3333/movies", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newObj),
          });
        }
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
      <form
        onSubmit={(event) => {
          event.preventDefault();

          changeWord(event.target[0].value); //, wordObj[0]);
          //setValue(event.target[0].value);
          setWord(event.target[0].value);

          setInputValue("");

          //console.log(event);
        }}
      >
        <input
          type="text"
          value={inputValue}
          placeholder="Введите часть названия..."
          onInput={(event) => setInputValue(event.target.value)}
        />

        <input type="submit" value="Поиск" />
      </form>

      <WordFetcher
        fetcher={wordFetcher}
        onLoadCallback={setWord}
        onLoadCallbackVal={setInputValue}
      >
        {word && (
          <ItemsFetcher
            value={word}
            fetcher={movieFetcher}
            param={"&s="}
            onLoadCallback={setList}
          >
            <Cards movies={list.Search} selected={false} />
          </ItemsFetcher>
        )}
      </WordFetcher>
    </div>
  );
});
