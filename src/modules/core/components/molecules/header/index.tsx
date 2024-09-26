import { Box, Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface HeaderBreadcrumbsProps {
  redirectTo?: string;
  label: string;
}

export interface HeaderProps {
  title: string;
  subTitle?: string;
  breadcrumbs: HeaderBreadcrumbsProps[];
}

export const Header = ({
  title,
  subTitle,
  breadcrumbs,
}: HeaderProps): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={1} marginBottom={5}>
      <Box>
        <Typography variant="h4">{title}</Typography>
        {subTitle && (
          <Typography variant="body1" fontWeight={500} color="textSecondary">
            {subTitle}
          </Typography>
        )}
      </Box>

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
    </Box>
  );
};
