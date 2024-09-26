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

export interface MusicKit {
  id?: string;
  name: string;
  artist?: string;
  originalSound?: string;
  audioKit?: MusicAudioItem[];
  documents?: MusicKitDocumentItem[];
  usefulLinks?: UsefulLinksItem[];
}
