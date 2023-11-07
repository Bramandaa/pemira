import React from "react";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
export default function DeleteAlert({ open, handleClose, handleDelete }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="p-6">
        <div className="font-RalewayBold text-2xl">Confirm Delete</div>
        <div className="font-RalewayRegular text-sm">
          Are you sure you want to delete this data?
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
            onClick={handleDelete}
            variant="contained"
            className="font-RalewayMedium bg-red-500 hover:bg-red-500/70"
          >
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
