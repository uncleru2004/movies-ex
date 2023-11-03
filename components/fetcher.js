export async function movieFetcher(value, param) {
  const query = {
    url: "https://www.omdbapi.com/?apikey=",
    key: "259c46a8",
  };

  const response = await fetch(query.url + query.key + param + value);
  if (!response.ok) {
    throw new Error("fetch " + response.status);
  }
  const result = await response.json();

  return result;
}

export async function selectedFetcher() {
  const query = {
    url: "http://localhost:3333/movies",
  };

  const response = await fetch(query.url);
  if (!response.ok) {
    throw new Error("fetch " + response.status);
  }
  const result = await response.json();

  return result;
}

export async function wordFetcher() {
  const query = {
    url: "http://localhost:3333/searchWord",
  };

  const response = await fetch(query.url);
  if (!response.ok) {
    throw new Error("fetch " + response.status);
  }
  const result = await response.json();

  return result;
}

export async function changeWord(value /*, wordObj*/) {
  const newObj = { /*...wordObj*/ id: 1, word: value };
  console.log(value);

  return fetch("http://localhost:3333/searchWord/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObj),
  });
}
