import { createContext, Dispatch, SetStateAction } from "react";

export type UserData = {
  submitPlace: string;
  submitAuthority: string;
};

type UserDataContextProps = {
  userData: UserData | undefined;
  setUserData: Dispatch<SetStateAction<UserData | undefined>>;
};

export const UserDataContext = createContext<UserDataContextProps | undefined>(
  undefined
);
