import { createContext, useContext } from "react";
import { Group } from "@/modules/group/models";

export interface GroupContextProps {
  group: Group | null;
  loading: boolean;
  createGroup: (data: Group) => Promise<void>;
}

export const groupContext = createContext<GroupContextProps>(
  {} as GroupContextProps
);

export const useGroupContext = (): GroupContextProps =>
  useContext(groupContext);
