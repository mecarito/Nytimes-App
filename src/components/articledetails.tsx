import React from "react";

export default function Articledetails(props: { article: any }) {
  return (
    <div className="flex flex-col gap-y-2 overflow-ellipsis">
      <div className="flex flex-row space-x-2">
        <p className="text-black ">Title:</p>
        <p className="text-gray-700">{props.article.title}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <p className="text-black ">Url:</p>
        <p className="text-gray-700">{props.article.url}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <p className="text-black ">Author</p>
        <p className="text-gray-700">{props.article.byline}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <p className="text-black ">Published date:</p>
        <p className="text-gray-700">{props.article.published_date}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <p className="text-black ">Updated at: </p>
        <p className="text-gray-700">{props.article.updated}</p>
      </div>
    </div>
  );
}
