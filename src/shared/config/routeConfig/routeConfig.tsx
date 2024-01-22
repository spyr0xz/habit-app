import MainPage from "pages/Habits/MainPage"
import NotFoundPage from "pages/NotFoundPage/NotFoundPage"
import TodosPage from "pages/Todos/TodosPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  MAIN = 'main',
  TODOS = 'todos',
  NOT_FOUND = 'not_found'
}

 export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/main',
  [AppRoutes.TODOS]: '/todos',
  [AppRoutes.NOT_FOUND]: '/'
}

export const routeConfig: Record<AppRoutes,RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />
  },
  [AppRoutes.TODOS]: {
    path: routePath.todos,
    element: <TodosPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />
  }
}