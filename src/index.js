import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import StarRating from "./StarRating";
import App from "./App-v2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* //   <StarRating
  //     maxRating={5}
  //     className="test"
  //     messages={["Bad", "Okay", "Good", "Great", "Awesome"]}
  //   />
  //   <StarRating
  //     maxRating={5}
  //     size={36}
  //     color="Magenta"
  //     defaultRating={3}
  //     messages={["Bad", "Okay", "Good", "Great", "Awesome"]}
  //   /> */}
    <App />
  </React.StrictMode>
);
