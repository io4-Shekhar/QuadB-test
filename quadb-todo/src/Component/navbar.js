import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import image from "../Assets/logo.png";
import GridViewIcon from "@mui/icons-material/GridView";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",

  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 0,
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", height: "44px" }}
      >
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={image} alt="logo" style={{ marginTop: "8px" }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          ></Typography>
          <Box sx={{ marginTop: "7px" }}>
            <IconButton size="small" aria-label="search" color="black">
              <SearchIcon />
            </IconButton>

            <IconButton size="small" color="black">
              <GridViewIcon size="small" />
            </IconButton>

            <IconButton size="small" color="black">
              <DarkModeIcon size="small" />
            </IconButton>
          </Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
