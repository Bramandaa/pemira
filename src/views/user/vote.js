"use client";
import VoteStatusAlert from "@/components/alerts/voteStatusAlert";
import VoteCard from "@/components/voteCard";
import { VoteCandidate } from "@/libs/functions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Vote({ item }) {
  const router = useRouter();
  const [message, setMessage] = useState();
  const { data: session } = useSession();
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [vote, setVote] = useState();
  const handleVote = async (id) => {
    const idCandidate = id;
    const idMahasiswa = session.user.id;
    const body = {
      idCandidate,
      idMahasiswa,
    };
    await VoteCandidate({ uri: "vote", body, setMessage: setMessage });
    setOpenDialog(false);
    setOpen(true);
  };

  return (
    <div>
      <div className="relative flex w-full h-[10vh] bg-[#1E5AF9]">
        <div className="flex w-full justify-center items-center font-RalewayBold text-xl text-white">
          Gunakan Suara
        </div>
        <div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          <svg
            className="h-7 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="w-full py-2 rounded-md font-LatoRegular text-center text-sm bg-[#E01212]/30">
          Gunakan suara kalian dengan cara pilih salah satu kandidat !
        </div>
        <div className="grid grid-cols-2 gap-2">
          {item.candidates.map((data, index) => (
            <VoteCard
              key={index}
              vote={vote}
              setVote={setVote}
              data={data}
              openDialog={openDialog}
              setOpenDialog={setOpenDialog}
              handleVote={handleVote}
            />
          ))}
        </div>
      </div>
      {message && (
        <VoteStatusAlert
          open={open}
          message={message}
          handleClose={() => {
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
