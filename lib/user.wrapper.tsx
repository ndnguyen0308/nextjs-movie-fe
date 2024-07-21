'use client';

import { access } from 'fs';
import { createContext, useContext, useState } from 'react';

interface IUser {
  accessToken?: string;
  refresh_token?: string;
  name: string;
}

interface IUserContext {
  currentUser: IUser;
  setCurrentUser: (v: IUser) => void;
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const initValue = {
    accessToken: '',
    refresh_token: '',
    name: '',
  };
  const [currentUser, setCurrentUser] = useState<IUser>(initValue);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
