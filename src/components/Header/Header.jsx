import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { NotificationsOutlined, Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../../app/features/userSlice";
import { auth } from "../../firebase/firebase";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    auth.signOut();
    console.log("I was logged out.");
  };

  return (
    <AppBar position="sticky">
      <Toolbar className="header">
        <div className="header__left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            height="30px"
            alt="Netflix Logo"
            className="logo"
          />
          <div className="nav-links">
            <NavLink>Home</NavLink>
            <NavLink>TV Shows</NavLink>
            <NavLink>Movies</NavLink>
            <NavLink>New & Popular</NavLink>
            <NavLink>My List</NavLink>
            <NavLink onClick={handleLogout}>LOGOUT</NavLink>
          </div>
        </div>
        <div className="header__right">
          <IconButton>
            <Search color="white" />
          </IconButton>
          <Link>Kids</Link>
          <Link>DVD</Link>
          <IconButton>
            <NotificationsOutlined color="white" />
          </IconButton>
          <IconButton>
            <Avatar />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
