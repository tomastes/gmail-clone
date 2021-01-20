import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar, Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import {SettingsOutlined, ContactSupport, AppsOutlined} from '@material-ui/icons';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const signOutHandelar=()=>{
    auth.signOut()
    dispatch(logout())
  }
  return (
    <div className="header">
      {/* header left */}
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
      <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""/>

      </div>

      {/* header input */}
    <div className="header_input">
        <IconButton>
            <SearchIcon />
        </IconButton>
       <input type="text" placeholder="Search Mail" />
       <IconButton>
            <ArrowDropDownIcon />
        </IconButton>
    </div>
      {/* header right */}
      <div className="header_right">
          <IconButton>
          <HelpOutlineIcon />
          </IconButton>
          <IconButton>
          <SettingsOutlined />
          </IconButton>
          <IconButton>
              <AppsOutlined />
          </IconButton>
          <IconButton  onClick={signOutHandelar}>
          <Avatar src={user.photoUrl} className="avatar">🎉</Avatar>
          </IconButton>
          
         
      </div>
    </div>
  );
};

export default Header;
