export interface MusicAudioItem {
  title: string;
  src: string;
}

export interface MusicKitDocumentItem {
  title: string;
  src: string;
  fileType: string;
}

export interface UsefulLinksItem {
  title: string;
  link: string;
}

export interface kitGroup {
  title: string;
  description?: string;
  kitItems: kitItem[];
  order?: number;
}

export interface kitItem {
  type: "audio" | "file" | "link";
  author?: string;
  title?: string;
  description?: string;
  src?: string;
  link?: string;
  openFile?: boolean;
  order?: number;
}

export interface MusicKit {
  id?: string;
  name: string;
  artist?: string;
  // avaliar mudança de estrutura
  // kitGroups?: kitGroup[];
  originalSound?: string;
  audioKit?: MusicAudioItem[];
  documents?: MusicKitDocumentItem[];
  usefulLinks?: UsefulLinksItem[];
}
