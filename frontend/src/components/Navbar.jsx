

import {Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{backgroundColor: "transparent", boxShadow: "none"}}
    >
      <Toolbar>
        <Typography
          variant="h6 w-6"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: '"Sofadi One", system-ui', // Adding the font here
            fontWeight: 400,
            fontStyle: "normal",
      
           
          }}
        >
          <img
            src="https://1000logos.net/wp-content/uploads/2020/08/Blogger-Logo.png"
            alt=""
            style={{height: "50px"}}
          />
        </Typography>

        <Box sx={{display: {xs: "none", md: "flex"}}}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
          >
            Home
          </Button>
          {loggedIn && (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/create-blog"
                sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
              >
                Create Blog
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/myblogs"
                sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
              >
                My Blogs
              </Button>
            </>
          )}
          {loggedIn ? (
            <Button
              color="inherit"
              onClick={handleLogout}
              sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
              >
                Login
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/register"
                sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
              >
                Register
              </Button>
            </>
          )}
        </Box>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{display: {xs: "flex", md: "none"}}}
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={handleClose}
            component={Link}
            to="/"
            sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
          >
            Home
          </MenuItem>
          {loggedIn && (
            <>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/create-blog"
                sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
              >
                Create Blog
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/myblogs"
                sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
              >
                My Blogs
              </MenuItem>
            </>
          )}
          {loggedIn ? (
            <MenuItem
              onClick={() => {
                handleClose();
                handleLogout();
              }}
              sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
            >
              Logout
            </MenuItem>
          ) : (
            <>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/login"
                sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
              >
                Login
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/register"
                sx={{fontFamily: '"Sofadi One", system-ui', fontWeight: 400}}
              >
                Register
              </MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
