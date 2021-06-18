import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(url);
      const data = response.json();
      data.then((value) => setResults(value.results));
    }

    fetchArticles();
  }, []);

  return { results };
}
