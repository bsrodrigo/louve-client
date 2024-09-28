import { ReactNode, useEffect, useReducer, useState } from "react";
import {
  Auth,
  getAuth as getAuthFirebase,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { ActionTypes, initialState, reducer } from "./reducer";
import { authContext } from "./context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoadingContent } from "@/modules/core/components/molecules";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [auth, setAuth] = useState<Auth>(null!);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      try {
        setPageLoading(true);
        const authFirebase = await getAuthFirebase();
        setAuth(authFirebase);
        setPageLoading(false);
      } catch (error) {
        console.error("Error in load AuthProvider", { error });
      }
    };

    load();
  }, []);

  useEffect(() => {
    const loadAuth = async () => {
      try {
        if (!auth) return;

        onAuthStateChanged(auth, (user) => {
          if (!user) return;

          dispatch({ type: ActionTypes.SET_USER, payload: user });
        });
      } catch (error) {
        console.error("Error in loadAuth AuthProvider", { error });
      } finally {
        setLoading(false);
      }
    };

    loadAuth();
  }, [auth]);

  const redirectUser = () => {
    window.location.href = "/";
  };

  const createUser = async (email: string, password: string, name: string) => {
    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
      });

      await dispatch({
        type: ActionTypes.SET_USER,
        payload: { ...user, displayName: name },
      });

      redirectUser();
    } catch (error) {
      alert("Não foi possível criar o usuário");
      console.error({ error });
    } finally {
      setLoading(false);
    }
  };

  const getLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;

      await dispatch({ type: ActionTypes.SET_USER, payload: user });
      redirectUser();
    } catch (error) {
      alert("Usuário ou senha inválidos");
      console.error("Error in getLogin AuthProvider", { error });
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth);

      dispatch({ type: ActionTypes.CLEAR_USER });
    } catch (error) {
      console.error("error in logout AuthProvider", { error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <authContext.Provider
      value={{
        user: state.user,
        loading,
        createUser,
        getLogin,
        logout,
      }}
    >
      {pageLoading ? <LoadingContent /> : children}
    </authContext.Provider>
  );
};
