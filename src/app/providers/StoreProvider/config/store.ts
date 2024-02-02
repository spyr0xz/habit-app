import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "app/entities/User";




export function createReduxStore(initialState: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      user: counterReducer
    },
    devTools: __IS__DEV__,
    preloadedState: initialState,
  })
}

