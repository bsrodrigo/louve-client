import { ReactNode, useEffect, useReducer, useState } from "react";

import { useBootstrapContext } from "@/modules/core/contexts/bootstrap";
import { LoadingContent } from "@/modules/core/components/molecules";
import {
  createUserService,
  getLoginService,
  logoutService,
  observerAuthService,
} from "@/modules/auth/infra/service";

import { ActionTypes, initialState, reducer } from "./reducer";
import { authContext } from "./context";
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const { firebaseApp } = useBootstrapContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadAuth = async () => {
      try {
        setPageLoading(true);
        observerAuthService((user) => {
          if (!user) return;

          dispatch({ type: ActionTypes.SET_USER, payload: user });
        });
      } catch (error) {
        console.error("Error in loadAuth AuthProvider", { error });
      } finally {
        setPageLoading(false);
      }
    };

    loadAuth();
  }, []);

  const createUser = async (email: string, password: string, name: string) => {
    try {
      setLoading(true);

      const user = await createUserService(email, password, name);

      await dispatch({
        type: ActionTypes.SET_USER,
        payload: user,
      });
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
      const user = await getLoginService(email, password);

      await dispatch({ type: ActionTypes.SET_USER, payload: user });
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
      await logoutService;

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
