import { MusicKit } from "@/modules/music/models";

export const musicKitsData: MusicKit[] = [
  {
    id: "00000001",
    name: "Tu és poderoso + Vida aos sepulcros",
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
        src: "/assets/letra.pdf",
        fileType: "pdf",
      },
    ],
    usefulLinks: [
      {
        title: "Louvor original Youtube",
        link: "https://www.youtube.com/watch?v=sgaw6G7r1lE",
      },
    ],
  },

  // {
  //   id: "00000002",
  //   name: "Assenta-te no trono",
  //   originalSound: "assets/music.mp3",
  //   audioKit: [
  //     {
  //       title: "Tenor",
  //       src: "assets/music.mp3",
  //     },
  //     {
  //       title: "Soprano",
  //       src: "assets/music.mp3",
  //     },
  //   ],
  //   documents: [
  //     {
  //       title: "Letra",
  //       src: "/assets/letra.pdf",
  //       fileType: "pdf",
  //     },
  //   ],
  //   usefulLinks: [
  //     {
  //       title: "Cifra",
  //       link: "https://www.cifraclub.com.br",
  //     },
  //   ],
  // },
];
