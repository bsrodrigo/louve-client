import { Box, useTheme } from "@mui/material";

import { UserDropdown } from "@/modules/core/components/organisms";
import { SelectGroup } from "@/modules/group/components/molecules";
import { useGroupContext } from "@/modules/group/context/group-context";

// interface TopBarProps {}

export const TopBar = (): JSX.Element => {
  const { groupsList } = useGroupContext();

  return (
    <Box
      height={72}
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      gap={2}
    >
      {!!groupsList?.length && <SelectGroup />}

      <UserDropdown />
    </Box>
  );
};
