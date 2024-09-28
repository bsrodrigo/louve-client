import { Box, Breadcrumbs, Link as MuiLink, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

interface HeaderBreadcrumbsProps {
  redirectTo?: string;
  label: string;
}

export interface HeaderProps {
  title?: string;
  subTitle?: string;
  breadcrumbs: HeaderBreadcrumbsProps[];
}

export const Header = ({
  title,
  subTitle,
  breadcrumbs,
}: HeaderProps): JSX.Element => {
  const theme = useTheme(); 

  return (
    <Box display="flex" flexDirection="column" gap={1} marginBottom={5}>
      <Box>
        <Breadcrumbs separator="›">
          {breadcrumbs.map(({ label, redirectTo }, index) =>
            redirectTo ? (
              <MuiLink
                key={`breadcrumb-item-${title}-${index}`}
                underline="hover"
                color="textSecondary"
                to={redirectTo}
                component={Link}
              >
                {label}
              </MuiLink>
            ) : (
              <Typography
                key={`breadcrumb-item-${title}-${index}`}
                color="primary"
              >
                {label}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </Box>

      {(title || subTitle) && (
        <Box>
          {title && <Typography variant="h4" color={theme.palette.grey[500]}>{title}</Typography>}
          {subTitle && (
            <Typography variant="body1" fontWeight={500} color="textSecondary">
              {subTitle}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};
