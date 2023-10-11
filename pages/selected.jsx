import { useState, useCallback } from "react";
import ItemsFetcher from "../components/ItemsFetcher";
//import {detailsFetcher} from "../components/fetcher";
import Cards from "../components/Cards";

export default function Selected() {
    const [value, setValue] = useState(""),
    [list, setList] = useState([]);
    //console.log(list)

  return (
    <div>
      <input
        value={value}
        placeholder="Введите название..."
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

      {list && <ItemsFetcher value={value} /*fetcher={detailsFetcher}*/ param={"&t="} onLoadCallback={setList}>
        <Cards movie={list} />
      </ItemsFetcher>}
    </div>
  );
}