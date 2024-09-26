import { createContext, useContext } from "react";

import { Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";

export interface BootstrapContextProps {
  firebaseApp: FirebaseApp;
  analytics: Analytics;
  firestore: Firestore;
}

export const BootstrapContext = createContext<BootstrapContextProps>(
  {} as BootstrapContextProps
);

export const useBootstrapContext = (): BootstrapContextProps =>
  useContext(BootstrapContext);
