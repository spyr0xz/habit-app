import { AnalyticsPage } from "pages/Analytics";
import { MainPage } from "pages/Habits";
import { NotFoundPage } from "pages/NotFoundPage";
import { SettingsPage } from "pages/SettingsPage";
import TodosPage from "pages/Todos/ui/TodosPage";
import { Navigate, RouteProps } from "react-router-dom";

export enum AppRoutes {
  DEFAULT = "default",
  MAIN = "main",
  TODOS = "todos",
  ANALYTICS = "analytics",
  SETTINGS = "settings",
  NOT_FOUND = "not_found",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.DEFAULT]: '/',
  [AppRoutes.MAIN]: "/main",
  [AppRoutes.TODOS]: "/todos",
  [AppRoutes.ANALYTICS]: "/analytics",
  [AppRoutes.SETTINGS]: "/settings",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.DEFAULT]: {
    path: routePath.default,
    element: <Navigate to={routePath.main} />
  },
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
  },
  [AppRoutes.TODOS]: {
    path: routePath.todos,
    element: <TodosPage />,
  },
  [AppRoutes.ANALYTICS]: {
    path: routePath.analytics,
    element: <AnalyticsPage />,
  },
  [AppRoutes.SETTINGS]: {
    path: routePath.settings,
    element: <SettingsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};
