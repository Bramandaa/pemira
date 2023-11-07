import React from "react";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
export default function LogoutAlert({ open, handleClose, handleLogout }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="p-6">
        <div className="font-RalewayBold text-2xl">Confirm Logout</div>
        <div className="font-RalewayRegular text-sm">
          Are you sure you want to logout?
        </div>
        <div className="flex justify-end space-x-3 pt-4">
          <Button
            onClick={handleClose}
            variant="contained"
            color="inherit"
            className="font-RalewayMedium"
          >
            Cancel
          </Button>
          <Button
            onClick={handleLogout}
            variant="contained"
            className="font-RalewayMedium bg-red-500 hover:bg-red-500/70"
          >
            Logout
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
