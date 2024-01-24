import { Sidebar } from "widgets/Sidebar";
import AppRouter from "./providers/router/ui/AppRouter";
import "./styles/index.scss";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="app">
      <Suspense fallback="">
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
