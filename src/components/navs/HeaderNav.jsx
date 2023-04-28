import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import AddGroupForm from "./AddGroupForm";
import SearchForm from "./SearchForm";

import { GroupContext } from "./../../context/groupContext";

import logo from "../../assets/images/logo.png";

function HeaderNav() {
    const {
        setDrawerOpen,
        handleClickOpenForm,
        handleCloseForm,
        formShow,
        setFormShow,
    } = useContext(GroupContext);
    const { pathname } = useLocation();

    return (
        <AppBar
            position="fixed"
            color="transparent"
            sx={{ backdropFilter: "blur(40px)" }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    disableRipple
                    sx={{
                        mr: 1,
                        display: {
                            xs: "block",
                            md: "none",
                        },
                    }}
                    onClick={() => setDrawerOpen(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: "flex" }}
                >
                    <img alt="" src={logo} width="30" height="30" />
                    <NavLink
                        to="/"
                        style={{ textDecoration: "none", color: "#ffffff", marginRight: 7 }}
                    >
                        گروه یاب
                    </NavLink>
                </Typography>

                <NavLink to="/search" style={{ textDecoration: "none" }}>
                    <Button
                        variant={"text"}
                        sx={{
                            color: "white",
                            mx: 1,
                            display: {
                                xs: "none",
                                md: "block",
                            },
                        }}
                    >
                        لیست گروه ها
                    </Button>
                </NavLink>
                <Button
                    variant={"outlined"}
                    sx={{
                        color: "white",
                        borderColor: "white",
                        mx: 1,
                        display: {
                            xs: "none",
                            md: "block",
                        },
                    }}
                    onClick={handleClickOpenForm}
                >
                    افزودن گروه
                </Button>
                <AddGroupForm
                    handleClose={handleCloseForm}
                    open={formShow}
                    setOpen={setFormShow}
                />
                <Box display={{ xs: "none", md: "block" }}>
                    {pathname === "/" || pathname === "/search" ? null : <SearchForm />}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderNav;
