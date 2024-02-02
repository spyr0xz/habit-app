import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getCounter } from "../getCounter/getCounter";
import { UserSchema } from "../../types/userSchema";

export const getCounterValue = createSelector(
  getCounter,
  (counter: UserSchema) => counter.value 
)