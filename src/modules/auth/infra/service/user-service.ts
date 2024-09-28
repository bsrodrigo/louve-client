import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

import { User } from "@/modules/auth/models";

export const createUserService = async (
  email: string,
  password: string,
  name: string
): Promise<User> => {
  const auth = getAuth();
  const db = getFirestore();

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (!userCredential?.user?.uid) {
    throw new Error(
      "Error in createUserService: createUserWithEmailAndPassword not found"
    );
  }

  const user = userCredential.user;

  await updateProfile(user, {
    displayName: name,
  });

  await setDoc(doc(db, "users", user.uid), {
    id: user.uid,
    uid: user.uid,
    name: name,
    email: email,
    createdAt: new Date(),
  });

  return {
    email: user.email || "",
    name: user.displayName || "",
    id: user.uid,
  };
};

export const getLoginService = async (
  email: string,
  password: string
): Promise<User> => {
  const auth = getAuth();
  const db = getFirestore();

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  const userDoc = await getDoc(doc(db, "users", user.uid));

  if (!userDoc.exists()) {
    throw new Error("User data not found in Firestore");
  }

  const userData = userDoc.data();

  return {
    email: user.email || "",
    name: user.displayName || "",
    id: user.uid,
    groups: userData.groups || [],
  };
};

export const logoutService = async (): Promise<void> => {
  const auth = getAuth();
  const db = getFirestore();

  await auth.signOut();
};

export const getUserService = async (id: string): Promise<User> => {
  const db = getFirestore();

  const userDoc = await getDoc(doc(db, "users", id));

  if (!userDoc.exists()) {
    throw new Error("Error in getUserService: User data not found ");
  }

  const userData = userDoc.data();

  return {
    email: userData.email || "",
    name: userData.name || "",
    id: userData.id || "",
    groups: userData.groups || [],
  };
};

export const observerAuthService = (callback: (user: User | null) => void) => {
  const auth = getAuth();

  auth.onAuthStateChanged(async (user) => {
    if (!user?.uid) {
      callback(null);
      return;
    }

    try {
      const userDatabase = await getUserService(user.uid);
      callback({
        email: userDatabase?.email || "",
        name: userDatabase?.name || "",
        id: userDatabase.id,
        groups: userDatabase?.groups || [],
      });
    } catch (error) {
      console.error("Error in observerAuthService", { error });
      callback(null);
    }
  });
};
