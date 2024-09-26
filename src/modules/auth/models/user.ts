import { Group } from "./group";

export interface User {
  id?: string;
  name: string;
  email: string;
  groups: Group[];
}
