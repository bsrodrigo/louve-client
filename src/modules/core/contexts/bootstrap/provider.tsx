import { ReactNode, useEffect, useState } from "react";

import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";

import { firebaseConfig } from "@/modules/core/infra/api/firestore";
import { LoadingContent } from "@/modules/core/components/molecules";

import { BootstrapContext } from "./context";

interface BootstrapProviderProps {
  children: ReactNode;
}

export const BootstrapProvider = ({
  children,
}: BootstrapProviderProps): JSX.Element => {
  const [firebaseApp, setFirebaseApp] = useState<FirebaseApp>(null!);
  const [analytics, setAnalytics] = useState<Analytics>(null!);
  const [firestore, setFirestore] = useState<Firestore>(null!);

  const [pageLoading, setPageLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        setPageLoading(true);
        const firebaseAppLoaded = await initializeApp(firebaseConfig);
        console.log({ firebaseAppLoaded });
        const analyticsLoaded = await getAnalytics(firebaseAppLoaded);
        const firestoreDbLoaded = await getFirestore(firebaseAppLoaded);

        setFirebaseApp(firebaseAppLoaded);
        setAnalytics(analyticsLoaded);
        setFirestore(firestoreDbLoaded);
      } catch (error) {
        console.error("error in load BootstrapProvider", { error });
      } finally {
        setPageLoading(false);
      }
    };

    load();
  }, []);

  return (
    <BootstrapContext.Provider
      value={{
        firebaseApp,
        analytics,
        firestore,
      }}
    >
      {pageLoading ? <LoadingContent /> : children}
    </BootstrapContext.Provider>
  );
};
