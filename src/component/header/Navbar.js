import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import ViewDayIcon from "@material-ui/icons/ViewDay";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "absolute",
    top: "20px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navBtn: {
    color: "white",
    textTransform: "uppercase",
  },
  buyBtn: {
    backgroundColor: "#00acc1",
    color: "white",
    borderRadius: "40px",
    fontSize: ".75rem",
    padding: "12px 26px",
  },
  mobileBuyBtn: {
    backgroundColor: "#00acc1",
    color: "white",
    borderRadius: "40px",
    fontSize: ".75rem",
    padding: "12px 60px 12px 24px",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button startIcon={<ViewComfyIcon />}>Components</Button>
      </MenuItem>
      <MenuItem>
        <Button startIcon={<ViewDayIcon />}>
          Sections
        </Button>
      </MenuItem>
      <MenuItem>
        <Button startIcon={<ViewCarouselIcon />}>
          Examples
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          variant="contained"
          disableElevation
          className={classes.mobileBuyBtn}
          startIcon={<ShoppingCartIcon />}
        >
          buy now
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar className={classes.navbar}>
        <Container maxWidth="lg" position="sticky">
          <Toolbar>
            <Typography className={classes.title} variant="h6">
              Online Book Store
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Button
                    className={classes.navBtn}
                    startIcon={<ViewComfyIcon />}
                  >
                    Components
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.navBtn}
                    startIcon={<ViewDayIcon />}
                  >
                    Sections
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.navBtn}
                    startIcon={<ViewCarouselIcon />}
                  >
                    Examples
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    disableElevation
                    className={classes.buyBtn}
                    startIcon={<ShoppingCartIcon />}
                  >
                    buy now
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default Navbar;
