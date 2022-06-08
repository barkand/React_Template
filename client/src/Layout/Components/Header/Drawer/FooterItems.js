import React from "react";
import { ListItemIcon, Stack, Divider } from "@mui/material";
import {
  Copyright as CopyrightIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

export default function FooterItems() {
  return (
    <>
      <Stack
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          left: 0,
          width: 240,
          paddingBottom: "10px",
          textAlign: "center",
          fontSize: "12px",
          backgroundColor: "palette.primary",
        }}
      >
        <Divider flexItem />
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            paddingTop: "20px",
            paddingBottom: "15px",
          }}
        >
          <ListItemIcon sx={{ color: "text.primary" }}>
            <TwitterIcon
              sx={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  `https://twitter.com/${process.env.REACT_APP_TWITTER_ID}`,
                  "_blank"
                )
              }
            />
            <GitHubIcon
              sx={{ cursor: "pointer", mx: 2 }}
              onClick={() =>
                window.open(
                  `https://github.com/${process.env.REACT_APP_GITHUB_ID}`,
                  "_blank"
                )
              }
            />
            <LinkedInIcon
              sx={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/in/${process.env.REACT_APP_LINKEDIN_ID}`,
                  "_blank"
                )
              }
            />
          </ListItemIcon>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ color: "text.primary" }}
        >
          <CopyrightIcon sx={{ mr: 0.3, fontSize: 14 }} />
          {process.env.REACT_APP_COPY_RIGHT_YEAR}{" "}
          {process.env.REACT_APP_COMPANY_NAME}
        </Stack>
      </Stack>
    </>
  );
}
