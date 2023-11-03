import { useState, useCallback } from "react";
import MovieDetails from "../components/MovieDetails";
import ItemsFetcher from "../components/ItemsFetcher";
import { movieFetcher } from "../components/fetcher";

export default function Search() {
  const [value, setValue] = useState(""),
    [inputValue, setInputValue] = useState(""),
    [list, setList] = useState([]);
  //console.log(list)

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setValue(event.target[0].value);
          setInputValue("");
          //console.log(event);
        }}
      >
        <input
          type="text"
          value={inputValue}
          placeholder="Введите название фильма..."
          onInput={(event) => setInputValue(event.target.value)}
        />

        <input type="submit" value="Поиск" />
      </form>

      {value && (
        <ItemsFetcher
          value={value}
          fetcher={movieFetcher}
          param={"&t="}
          onLoadCallback={setList}
        >
          <MovieDetails movie={list} />
        </ItemsFetcher>
      )}
    </div>
  );
}
