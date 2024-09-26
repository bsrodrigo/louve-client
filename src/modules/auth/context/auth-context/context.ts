import { User } from "firebase/auth";
import { createContext, useContext } from "react";

export interface authContextProps {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string, name: string) => Promise<void>;
  getLogin: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const authContext = createContext<authContextProps>(
  {} as authContextProps
);

export const useAuthContext = (): authContextProps => useContext(authContext);
