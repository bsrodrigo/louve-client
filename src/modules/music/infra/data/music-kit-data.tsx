import { MusicKit } from "@/modules/music/models";

export const musicKitsData: MusicKit[] = [
  {
    id: "00001",
    name: "Tu és poderoso + Vida aos sepulcros (Medley)",
    artist: "Ello Eterno - AD Brás",
    originalSound: "assets/sounds/m1-original.mp3",
    audioKit: [
      {
        title: "Soprano",
        src: "assets/sounds/m1-soprano.m4a",
      },
      {
        title: "Contralto",
        src: "assets/sounds/m1-contralto.m4a",
      },
      {
        title: "Contralto 2",
        src: "assets/sounds/m1-contralto-p2.m4a",
      },
      {
        title: "Tenor",
        src: "assets/sounds/m1-tenor.m4a",
      },
    ],
    documents: [
      {
        title: "Letra",
        src: "/assets/documents/m1-lyrics.pdf",
        fileType: "pdf",
        viewFileOpen: true,
      },
    ],
    usefulLinks: [
      {
        title: "Música original Youtube",
        link: "https://www.youtube.com/watch?v=sgaw6G7r1lE",
      },
    ],
  },

  {
    id: "00002",
    name: "Assenta-te no trono",
    artist: "Coral Resgate",
    originalSound: "assets/sounds/m2-original.mp3",
    documents: [
      {
        title: "Letra",
        src: "/assets/documents/m2-lyrics.pdf",
        fileType: "pdf",
        viewFileOpen: true,
      },
    ],
    usefulLinks: [
      {
        title: "Música original Youtube",
        link: "https://www.youtube.com/watch?v=n51PMIaoZNM",
      },
    ],
  },

  {
    id: "00000003",
    name: "A Boa Parte",
    artist: "Phop music, part. Nívea Soares",
    originalSound: "assets/sounds/m3-original.mp3",
    documents: [
      {
        title: "Letra",
        src: "/assets/documents/m3-lyrics.pdf",
        fileType: "pdf",
        viewFileOpen: true,
      },
    ],
    usefulLinks: [
      {
        title: "Música original Youtube",
        link: "https://www.youtube.com/watch?v=dlGOiuxSzVw",
      },
    ],
  },
];
