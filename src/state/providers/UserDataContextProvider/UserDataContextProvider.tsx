import { useEffect, useState } from 'react';

import { userDataStorage } from '@/storage/userDataStorage';
import { UserData } from '@/@types/userData';
import { UserDataContext } from '@/state/contexts/UserDataContext/UserDataContext';

type StepperContextProviderProps = {
  children: React.ReactNode;
};

export const UserDataContextProvider = ({ children }: StepperContextProviderProps) => {
  const [userData, setUserData] = useState<UserData | undefined>(userDataStorage.get());

  useEffect(() => {
    if (userData) {
      userDataStorage.set(userData);
    }
  }, [userData]);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
