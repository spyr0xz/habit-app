import { Sidebar } from "widgets/Sidebar";
import AppRouter from "./providers/router/ui/AppRouter";
import "./styles/index.scss";
import { Suspense, useState } from "react";
import LoginPage from "pages/LoginPage/ui/LoginPage";

export const App = () => {
  const [isAuth, setIsAuth] = useState(false)


  if(isAuth) {
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
  } return (
    <div className="app" >
      <Suspense fallback='load'>
      <LoginPage />
      </Suspense>
      
    </div>  
    
  )
  
};
