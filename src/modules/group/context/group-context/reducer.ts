import { Group } from "@/modules/group/models";

export interface InitialState {
  group: Group | null;
}

export enum ActionTypes {
  SET_GROUP = "SET_GROUP",
}

export type ActionsProps = {
  type: ActionTypes.SET_GROUP;
  payload: Group;
};

export const initialState: InitialState = {
  group: null,
};

export function reducer(
  state = initialState,
  action: ActionsProps
): InitialState {
  switch (action.type) {
    case ActionTypes.SET_GROUP:
      return {
        ...state,
        group: action.payload,
      };

    default:
      return state;
  }
}
