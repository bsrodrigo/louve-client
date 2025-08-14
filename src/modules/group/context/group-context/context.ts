import { createContext, useContext } from "react";
import { Group } from "@/modules/group/models";

export interface GroupContextProps {
  group: Group | null;
  groupsList: Group[];
  loading: boolean;
  listGroups: () => Promise<void>;
  createGroup: (data: Group) => Promise<void>;
  updateSelectedGroup: (data: Group) => Promise<void>;
}

export const groupContext = createContext<GroupContextProps>(
  {} as GroupContextProps
);

export const useGroupContext = (): GroupContextProps =>
  useContext(groupContext);
