import { useState, useCallback } from "react";
import Cards from "../components/Cards";
import ItemsFetcher from "../components/ItemsFetcher";
//import {movieFetcher} from "../components/fetcher";

export default function Home() {
  const [value, setValue] = useState(""),
    [list, setList] = useState([]);

  return (
    <div>
      <input
        value={value}
        placeholder="Введите часть названия..."
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

      {value && (<ItemsFetcher value={value} /*fetcher={movieFetcher}*/ param={"&s="} onLoadCallback={setList}>
        <Cards movies={list.Search} />
      </ItemsFetcher>)}
    </div>
  );
}
