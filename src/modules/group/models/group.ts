export type GroupPermissionTypes = "ADMIN" | "EDITOR";

export interface GroupMember {
  id: string;
  permission: GroupPermissionTypes[];
}

export interface Group {
  id?: string;
  creatorId?: string;
  name: string;
  description: string;
  members?: GroupMember[];
  musicKitsFolders?: string[];
  createdAt?: Date;
}
