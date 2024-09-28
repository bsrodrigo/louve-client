export type GroupPermissionTypes = "EDITOR" | "READER";

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
