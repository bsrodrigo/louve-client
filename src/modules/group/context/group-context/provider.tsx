import { ReactNode, useReducer, useState } from "react";

import { LoadingContent } from "@/modules/core/components/molecules";

import { Group, GroupMember } from "@/modules/group/models";
import { createGroupService } from "@/modules/group/infra/service";

import { groupContext } from "./context";
import { ActionTypes, initialState, reducer } from "./reducer";
import { useAuthContext } from "@/modules/auth/context/auth-context";

interface GroupProviderProps {
  children: ReactNode;
}

export const GroupProvider = ({
  children,
}: GroupProviderProps): JSX.Element => {
  const { user } = useAuthContext();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  const createGroup = async (data: Group) => {
    try {
      setLoading(true);

      if (!user?.id) {
        alert("Usuário não encontrado");
        return;
      }

      const member: GroupMember = { id: user.id, permission: ["ADMIN"] };

      const group = await createGroupService({
        ...data,
        creatorId: user?.id,
        members: [member],
      });

      await dispatch({
        type: ActionTypes.SET_GROUP,
        payload: group,
      });
    } catch (error) {
      alert("Não foi possível criar o grupo");
      console.error("Error in createGroup groupProvider", { error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <groupContext.Provider
      value={{
        group: state.group,
        loading,
        createGroup,
      }}
    >
      {pageLoading ? <LoadingContent /> : children}
    </groupContext.Provider>
  );
};
