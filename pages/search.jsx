import { useState, useCallback } from "react";
import MovieDetails from "../components/MovieDetails";
import ItemsFetcher from "../components/ItemsFetcher";
//import {detailsFetcher} from "../components/fetcher";

export default function Search() {
    const [value, setValue] = useState(""),
    [list, setList] = useState([]);
    //console.log(list)

  return (
    <div className="container">
      <input
        value={value}
        placeholder="Введите название фильма..."
        onInput={(event) => setValue(event.target.value)}
      />

      <button
        onClick={() => {
          setValue("");
          console.log(list);
        }}
      >
        Поиск
      </button>

      {value && <ItemsFetcher value={value} /*fetcher={detailsFetcher}*/ param={"&t="} onLoadCallback={setList}>
        <MovieDetails movie={list} />
      </ItemsFetcher>}
    </div>
  );
}