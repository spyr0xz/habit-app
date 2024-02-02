import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import "shared/config/i18n/i18n";
import "app/styles/index.scss";
import { createRoot } from "react-dom/client";
import { StoreProvider } from "app/providers/StoreProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);
