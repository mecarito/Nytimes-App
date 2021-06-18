import { useEffect, useState } from "react";
import useFetch from "../hooks/fetchArticles";

export default function ArticlesFeed() {
  let apikey = "vqwEXhugjGOIqm5MAvdaycGDstnkpbzL";
  let url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${apikey}`;

  const { results } = useFetch(url);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(results);
  }, [results]);

  return (
    <div className="mt-20 w-full">
      {data.map((article: any) => {
        return (
          <div
            key={article.id}
            className="flex flex-row items-center p-4 gap-4 sm:gap-x-8"
          >
            <div>
              <div className="w-8 h-8 rounded-full bg-gray-700"></div>
            </div>
            <div className="flex flex-col gap-y-2 overflow-auto">
              <p className="">{article.title}</p>
              <p className=" text-gray-500">{article.byline}</p>
              <div className="flex flex-row space-x-2">
                <span className="material-icons text-gray-500">event</span>
                <p className="text-gray-500">{article.published_date}</p>
              </div>
            </div>
            <div>
              <span className="material-icons text-black">chevron_right</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
