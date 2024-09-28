import { MusicKitsFolder } from "@/modules/music/models";
import { musicKitsData } from "@/modules/music/infra/data";

export const musicKitsFolders: MusicKitsFolder[] = [
  {
    id: "all",
    name: "Todas músicas",
    description: "Todos os ossos hinos cantados no grupo",
    musicKits: musicKitsData,
  },
  {
    id: "00002",
    name: "Congresso 2024",
    description:
      "Porque onde estiver o vosso tesouro, aí estará também o vosso coração (Mateus 6:21)",
    musicKits: musicKitsData,
  },
];
