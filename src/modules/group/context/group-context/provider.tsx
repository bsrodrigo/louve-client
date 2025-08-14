import { ReactNode, useEffect, useReducer, useState } from "react";

import { LoadingContent } from "@/modules/core/components/molecules";

import { Group, GroupMemberRoles } from "@/modules/group/models";
import {
  createGroupService,
  listGroupsService,
} from "@/modules/group/infra/service";

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
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  const createGroup = async (data: Group) => {
    try {
      setLoading(true);

      if (!user?.id) {
        alert("Usuário não encontrado");
        return;
      }

      const memberRoles: GroupMemberRoles = {
        memberId: user.id,
        roles: ["ADMIN"],
      };

      const group = await createGroupService({
        ...data,
        creatorId: user?.id,
        membersRoles: [memberRoles],
        members: [user.id],
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

  const listGroups = async () => {
    try {
      if (!user?.id) {
        return;
      }

      setLoading(true);
      const groups = await listGroupsService(user.id);

      await dispatch({
        type: ActionTypes.LIST_GROUP,
        payload: groups,
      });
    } catch (error) {
      alert("Não foi possível listar os grupos");
      console.error("Error in listGroups groupProvider", { error });
    } finally {
      setLoading(false);
    }
  };

  const updateSelectedGroup = async (data: Group) => {
    try {
      setLoading(true);

      await dispatch({
        type: ActionTypes.SET_GROUP,
        payload: data,
      });
    } catch (error) {
      alert("Não foi possível atualizar o grupo");
      console.error("Error in updateGroupSelected groupProvider", { error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (state.groupsList.length) {
        return;
      }

      setPageLoading(true);
      await listGroups();
      setPageLoading(false);
    };

    fetchData();
  }, []);

  return (
    <groupContext.Provider
      value={{
        group: state.group,
        groupsList: state.groupsList,
        loading,
        updateSelectedGroup,
        createGroup,
        listGroups,
      }}
    >
      {pageLoading ? <LoadingContent /> : children}
    </groupContext.Provider>
  );
};
