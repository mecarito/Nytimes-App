import React from "react";
import ArticlesFeed from "./components/articlesfeed";

function App() {
  return (
    <div className="h-screen">
      <div
        className="flex flex-row justify-around fixed top-0 left-0 right-0
       bg-green-500 shadow-md py-6 items-center"
      >
        <span className="material-icons text-white">menu</span>
        <h1 className="text-white font-semibold text-2xl">
          NY Times Most Popular
        </h1>
        <span className="material-icons text-white">search</span>
        <span className="material-icons text-white">more_vert</span>
      </div>
      <ArticlesFeed />
    </div>
  );
}

export default App;
