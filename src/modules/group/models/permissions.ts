export enum Permission {
  EDITOR = "EDITOR",
  READER = "READER",
}

export interface Member {
  id: string;
  permission: Permission[];
}

export interface Group {
  id?: string;
  name: string;
  description: string;
  members: string[];
  admins: string[];
  musicKitsFolders: string[];
  created_at: Date;
}
