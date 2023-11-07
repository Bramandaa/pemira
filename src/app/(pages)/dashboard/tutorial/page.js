"use client";
import TutorialCard from "@/components/tutorialCard";
import VoteCard from "@/components/voteCard";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <div className="relative flex w-full h-[10vh] bg-[#1E5AF9]">
        <div className="flex w-full justify-center items-center font-RalewayBold text-xl text-white">
          Tutorial
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
        <TutorialCard
          number="1"
          step="Tahap Pertama"
          desc="Pilih tombol masuk untuk masuk ke website E-VOTING PEMIRA 2023"
        />
        <TutorialCard
          number="2"
          step="Tahap Kedua"
          desc="Masukkan NIM dan Password (yang sudah diberikan panitia"
        />
        <TutorialCard
          number="3"
          step="Tahap Ketiga"
          desc="Pilih menu 'Gunakan Suara'"
        />
        <TutorialCard
          number="4"
          step="Tahap Keempat"
          desc="Pilih salah satu calon dengan klik tombol 'PILIH'"
        />
        <TutorialCard
          number="5"
          step="Tahap Kelima"
          desc="Lalu akan muncul pop up konfirmasi, tekan 'vote' jika pilihan sudah benar"
        />
        <TutorialCard
          number="6"
          step="Tahap Keenam"
          desc="Selamat, anda telah berhasil memilih"
        />
      </div>
    </div>
  );
}
