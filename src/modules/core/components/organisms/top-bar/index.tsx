import { Box, useTheme } from "@mui/material";

import { UserDropdown } from "@/modules/core/components/organisms";
import { SelectGroup } from "@/modules/group/components/molecules";

interface TopBarProps {}

export const TopBar = ({}: TopBarProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      height={72}
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      gap={2}
    >
      <SelectGroup groups={[]} onSelectGroup={() => null} />

      <UserDropdown />
    </Box>
  );
};
