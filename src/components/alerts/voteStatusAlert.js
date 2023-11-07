import React from "react";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
export default function VoteStatusAlert({ open, handleClose, message }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="p-6">
        <div className="font-RalewayBold text-2xl">Vote Status</div>
        <div className="font-RalewayRegular text-sm">{message}</div>
        <div className="flex justify-end space-x-3 pt-4">
          <Button
            onClick={handleClose}
            variant="contained"
            color="inherit"
            className="font-RalewayMedium text-white bg-[#1E5AF9] hover:bg-[#1E5AF9]/70"
          >
            Confirm
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
