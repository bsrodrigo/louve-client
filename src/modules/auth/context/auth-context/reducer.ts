import { User } from "firebase/auth";

export interface InitialState {
  user: User | null;
}

export enum ActionTypes {
  SET_USER = "SET_USER",
  CLEAR_USER = "CLEAR_USER",
}

export type ActionsProps =
  | {
      type: ActionTypes.SET_USER;
      payload: User;
    }
  | {
      type: ActionTypes.CLEAR_USER;
    };

export const initialState: InitialState = {
  user: null,
};

export function reducer(
  state = initialState,
  action: ActionsProps
): InitialState {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case ActionTypes.CLEAR_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
