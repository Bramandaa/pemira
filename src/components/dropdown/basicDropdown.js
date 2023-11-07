"use client";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteAlert from "../alerts/deleteAlert";

export default function BasicDropdown({ params, setForm, setModal, Delete }) {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setForm(params.row);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <MenuIcon
          className="hover:fill-black fill-gray-200 cursor-pointer"
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        />
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            className="flex items-center gap-x-2"
            onClick={() => {
              setModal("Edit");
              handleClose();
            }}
          >
            <EditIcon fontSize="1rem" />
            Edit
          </MenuItem>
          <MenuItem
            className="flex items-center gap-x-2"
            onClick={() => setOpenDialog(true)}
          >
            <DeleteIcon fontSize="1rem" />
            Delete
          </MenuItem>
          <DeleteAlert
            open={openDialog}
            handleClose={() => setOpenDialog(false)}
            handleDelete={() => {
              setOpenDialog(false);
              Delete(params.row._id);
              handleClose();
            }}
          />
        </Menu>
      </div>
    </>
  );
}
