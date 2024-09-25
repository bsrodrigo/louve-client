import {
  BoxerIcon,
  Clock02Icon,
  ContactIcon,
  Home01Icon,
  HugeiconsProps,
  InboxCheckIcon,
  PackageIcon,
  ShampooIcon,
  UserGroupIcon,
  WorkHistoryIcon,
} from "hugeicons-react";

interface MenuItem {
  label: string;
  redirectTo: string;
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
];
