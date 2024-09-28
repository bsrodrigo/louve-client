export interface userGroup {
  id: string;
  name: string;
  description?: string;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  groups?: userGroup[];
}
