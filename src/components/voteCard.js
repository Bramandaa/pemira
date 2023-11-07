import Image from "next/image";
import React, { useState } from "react";
import VoteAlert from "./alerts/voteAlert";

export default function VoteCard({
  data,
  vote,
  setVote,
  openDialog,
  setOpenDialog,
  handleVote,
}) {
  return (
    <div className="border-2 rounded-lg drop-shadow-md overflow-hidden">
      <div className="relative w-full h-52">
        <div className="absolute w-full z-50 top-0 font-LatoMedium text-center">
          {`No ${data.nomor}`}
        </div>
        <Image
          src={data.image}
          sizes="100vh"
          alt={data.image}
          fill
          priority
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="flex flex-col justify-between w-full h-28 space-y-2 p-2 font-RalewayBold text-xs text-center bg-white">
        <div>
          <div>{data.nama_ketua}</div>
          <div>{data.nama_wakil}</div>
        </div>
        <button
          onClick={() => {
            setOpenDialog(true);
            setVote(data._id);
          }}
          className="w-full py-[6px] text-white rounded-2xl bg-[#1E5AF9]"
        >
          Pilih
        </button>
      </div>
      <VoteAlert
        open={openDialog}
        handleClose={() => {
          setOpenDialog(false), setVote(undefined);
        }}
        handleVote={() => {
          handleVote(vote);
        }}
      />
    </div>
  );
}
