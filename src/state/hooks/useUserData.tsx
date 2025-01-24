import { useContext } from "react";

import { UserDataContext } from "../contexts/UserDataContext/UserDataContext";

export const useUserData = () => {
  const context = useContext(UserDataContext);

  if (context === undefined) {
    throw new Error(
      "useUserData must be used within the UserDataContextProvider"
    );
  }

  return context;
};
