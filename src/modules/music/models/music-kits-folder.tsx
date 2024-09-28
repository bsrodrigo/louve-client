import { MusicKit } from "@/modules/music/models";

export interface MusicKitsFolder {
  id?: string;
  name: string;
  description?: string;
  musicKits: MusicKit[];
}
