import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import "./app/styles/index.scss";
import { render } from "react-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
