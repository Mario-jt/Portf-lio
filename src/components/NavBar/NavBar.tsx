import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const StyledToobar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
}));

const NavBar = () => {
  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuItem>About</MenuItem>
          <MenuItem>skills</MenuItem>
          <MenuItem>Project</MenuItem>
        </StyledToobar>
      </AppBar>
    </>
  );
};

export default NavBar;
