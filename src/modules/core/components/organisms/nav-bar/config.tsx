import {
  BoxerIcon,
  Clock02Icon,
  ContactIcon,
  FolderMusicIcon,
  Home01Icon,
  HugeiconsProps,
  InboxCheckIcon,
  MusicNote01Icon,
  PackageIcon,
  ShampooIcon,
  UserGroupIcon,
  WorkHistoryIcon,
  Wrench01Icon,
} from "hugeicons-react";

interface MenuItem {
  label: string;
  redirectTo: string;
  disabled?: boolean;
  Icon: React.FC<
    Omit<HugeiconsProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

export const menuList: MenuGroup[] = [
  {
    title: "Home",
    items: [
      {
        label: "Home",
        redirectTo: "/",
        Icon: Home01Icon,
      },
    ],
  },
  {
    title: "Músicas",
    items: [
      {
        label: "Músicas",
        redirectTo: "/musics",
        Icon: MusicNote01Icon,
      },
      {
        label: "Pastas",
        redirectTo: "/musics/folders",
        Icon: FolderMusicIcon,
      },
    ],
  },
  {
    title: "Agenda",
    items: [
      {
        label: "Agenda",
        redirectTo: "/todo",
        Icon: Wrench01Icon,
        disabled: true,
      },
      {
        label: "Escalas",
        redirectTo: "/todo",
        disabled: true,
        Icon: Wrench01Icon,
      },
    ],
  },
];
