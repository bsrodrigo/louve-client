export type GroupRolesTypes = "ADMIN" | "EDITOR";

export interface GroupMemberRoles {
  memberId: string;
  roles: GroupRolesTypes[];
}

export interface Group {
  id?: string;
  creatorId?: string;
  name: string;
  description: string;
  members?: string[];
  membersRoles?:GroupMemberRoles[];
  musicKitsFolders?: string[];
  createdAt?: Date;
}
