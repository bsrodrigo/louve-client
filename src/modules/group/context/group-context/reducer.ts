import { Group } from "@/modules/group/models";

export interface InitialState {
  group: Group | null;
  groupsList: Group[];
}

export enum ActionTypes {
  SET_GROUP = "SET_GROUP",
  LIST_GROUP = "LIST_GROUP",
}

export type ActionsProps =
  | {
      type: ActionTypes.SET_GROUP;
      payload: Group;
    }
  | {
      type: ActionTypes.LIST_GROUP;
      payload: Group[];
    };

export const initialState: InitialState = {
  group: null,
  groupsList: [],
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

    case ActionTypes.LIST_GROUP:
      return {
        ...state,
        groupsList: [...action.payload],
        group: state.group || action.payload[0] || null,
      };

    default:
      return state;
  }
}
