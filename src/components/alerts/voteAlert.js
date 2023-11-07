import React from "react";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
export default function VoteAlert({ open, handleClose, handleVote }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="p-6">
        <div className="font-RalewayBold text-2xl">Confirm Vote</div>
        <div className="font-RalewayRegular text-sm">
          Are you sure want to vote?
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
            onClick={handleVote}
            variant="contained"
            className="font-RalewayMedium bg-[#1E5AF9] hover:bg-[#1E5AF9]/70"
          >
            Vote
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
