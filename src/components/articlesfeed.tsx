import React from "react";
import { useEffect, useState } from "react";
import useFetch from "../hooks/fetchArticles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Articledetails from "./articledetails";
import { key } from "../environment";

export default function ArticlesFeed() {
  let apikey = key;
  let url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${apikey}`;

  const { results } = useFetch(url);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    setData(results);
  }, [results]);

  const openDialog = (article: any) => {
    setDetails(article);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <div className="mt-20 w-full">
      <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className="text-black text-2xl">
          Article Details
        </DialogTitle>
        <DialogContent>
          <Articledetails article={details} />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>

      {data.map((article: any) => {
        return (
          <div
            key={article.id}
            className="flex flex-row items-center p-4 gap-4 sm:gap-x-8 cursor-pointer"
            onClick={() => openDialog(article)}
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
              <span
                className="material-icons text-black"
                onClick={() => openDialog(article)}
              >
                chevron_right
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
