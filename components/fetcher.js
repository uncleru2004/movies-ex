export async function fetcher(value, param) {
  const query = {
    url: "https://www.omdbapi.com/?apikey=",
    key: "259c46a8",
  };

  const response = await fetch(query.url + query.key + param + value);
  if (!response.ok) {
    throw new Error("fetch " + response.status);
  }
  const result = (await response.json());

  console.log(result);

  return result;
}


/*export async function movieFetcher(value) {
  const query = {
    url: "https://www.omdbapi.com/?apikey=",
    key: "259c46a8",
  };

  const response = await fetch(query.url + query.key + "&s=" + value);
  if (!response.ok) {
    throw new Error("fetch " + response.status);
  }
  const result = (await response.json()).Search;

  console.log(result);

  return result;
}



export async function detailsFetcher(value) {
  const query = {
    url: "https://www.omdbapi.com/?apikey=",
    key: "259c46a8",
  };

  const response = await fetch(query.url + query.key + "&t=" + value);
  if (!response.ok) {
    throw new Error("fetch " + response.status);
  }
  const result = (await response.json());

  console.log(result);

  return result;
}*/