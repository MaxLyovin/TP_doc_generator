import { useState } from "react";

const INITIAL_STATE = false;

export const useToggle = (initialState = INITIAL_STATE) => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = () => setState((currentState) => !currentState);
  const toggleByValue = (value: boolean) => setState(value);
  const resetToInitialState = () => setState(INITIAL_STATE);

  return { state, toggle, toggleByValue, resetToInitialState };
};
