import { createContext, Dispatch, SetStateAction } from "react";
import { UserData } from "@/@types/userData";

type UserDataContextProps = {
  userData: UserData | undefined;
  setUserData: Dispatch<SetStateAction<UserData | undefined>>;
};

export const UserDataContext = createContext<UserDataContextProps | undefined>(
  undefined
);
