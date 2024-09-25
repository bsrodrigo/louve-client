import { MusicKit } from "@/modules/music/models";

export const musicKitsData: MusicKit[] = [
  {
    id: "00000001",
    name: "Tu és poderoso + Vida aos sepulcros",
    originalSound: "assets/music.mp3",
    audioKit: [
      {
        title: "Tenor",
        src: "assets/music.mp3",
      },
      {
        title: "Soprano",
        src: "assets/music.mp3",
      },
    ],
    documents: [
      {
        title: "Letra",
        src: "/assets/letra.pdf",
        fileType: "pdf",
      },
    ],
    usefulLinks: [
      {
        title: "Cifra",
        link: "https://www.cifraclub.com.br",
      },
    ],
  },

  {
    id: "00000002",
    name: "Assenta-te no trono",
    originalSound: "assets/music.mp3",
    audioKit: [
      {
        title: "Tenor",
        src: "assets/music.mp3",
      },
      {
        title: "Soprano",
        src: "assets/music.mp3",
      },
    ],
    documents: [
      {
        title: "Letra",
        src: "/assets/letra.pdf",
        fileType: "pdf",
      },
    ],
    usefulLinks: [
      {
        title: "Cifra",
        link: "https://www.cifraclub.com.br",
      },
    ],
  },
];
