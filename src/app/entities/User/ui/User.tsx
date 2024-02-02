import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/userSlice";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const User = () => {
  const dispatch = useDispatch();

   const increment = () => {
    dispatch(counterActions.increment());
  };

  const value = useSelector(getCounterValue)

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>value = {value}</h1>
      <Button onClick={increment}>Plus</Button>
      <Button onClick={decrement}>Minus</Button>
    </div>
  );
};
