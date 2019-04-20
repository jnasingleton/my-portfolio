import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { scrollPageTo } from "./animatedScrollTo";
const scrollPageToDuration = 500;
let pageLinks = ["about-me", "projects"];
pageLinks.forEach(pageLink => {
  let internalLinks = document.querySelectorAll(".internal-link-" + pageLink);
  internalLinks.forEach(internalLink => {
    internalLink.addEventListener("click", () => {
      scrollPageTo("#" + pageLink, scrollPageToDuration);
    });
  });
});
