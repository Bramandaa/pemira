"use client";
import Candidate from "@/components/candidate";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Candidates({ item }) {
  const router = useRouter();
  return (
    <div>
      <div className="relative flex w-full h-[10vh] bg-[#1E5AF9]">
        <div className="flex w-full justify-center items-center font-RalewayBold text-xl text-white">
          Lihat Calon
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
      <div className="p-4">
        {item.candidates.map((data, index) => (
          <Link key={index} href={`/dashboard/candidates/${data._id}`}>
            <div className="pb-4">
              <Candidate
                number={data.nomor}
                src={data.image}
                data={` ${data.nama_ketua} & ${data.nama_wakil}`}
              />{" "}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
