export enum GroupResponsePermission {
  EDITOR = "EDITOR",
  READER = "READER",
}

export interface GroupResponseMember {
  id: string;
  permission: GroupResponsePermission[];
}

export interface GroupResponse {
  id?: string;
  name: string;
  description: string;
  members: GroupResponseMember[];
  musicKitsFolders: string[];
  createdAt?: Date;
}
