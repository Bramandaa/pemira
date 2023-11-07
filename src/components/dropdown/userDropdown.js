"use client";
import { useState } from "react";
import LockResetIcon from "@mui/icons-material/LockReset";
import LogoutIcon from "@mui/icons-material/Logout";
import { Menu, MenuItem } from "@mui/material";
import DeleteAlert from "../alerts/deleteAlert";
import LogoutAlert from "../alerts/logoutAlert";

export default function UserDropdown({ setModal, Logout }) {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <svg
          className="w-8 pt-1 fill-[#1E5AF9]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={handleClick}
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            className="flex items-center gap-x-2 font-RalewayRegular"
            onClick={() => {
              setModal("Change Password");
              handleClose();
            }}
          >
            <LockResetIcon fontSize="inherit" />
            Ubah Password
          </MenuItem>
          <MenuItem
            className="flex items-center gap-x-2"
            onClick={() => setOpenDialog(true)}
          >
            <LogoutIcon fontSize="inherit" />
            Logout
          </MenuItem>
          <LogoutAlert
            open={openDialog}
            handleClose={() => setOpenDialog(false)}
            handleLogout={() => {
              setOpenDialog(false);
              handleClose();
              Logout();
            }}
          />
        </Menu>
      </div>
    </>
  );
}
