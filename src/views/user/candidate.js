"use client";
import Candidate from "@/components/candidate";
import { useRouter } from "next/navigation";

export default function CandidateViews({ item }) {
  const router = useRouter();
  return (
    <div>
      <div className="relative flex w-full h-[10vh] bg-[#1E5AF9]">
        <div className="flex w-full justify-center items-center font-RalewayBold text-xl text-white">
          {`Paslon ${item.nomor}`}
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
        <Candidate
          number={item.nomor}
          src={item.image}
          data={` ${item.nama_ketua} & ${item.nama_wakil}`}
        />
        <div className="w-full py-4 border-2 rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <div className="font-RalewayBold text-center">Visi</div>
            <div className="w-[80%] font-LatoRegular text-xs text-center">
              {item.visi}
            </div>
          </div>
        </div>
        <div className="w-full py-4 border-2 rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <div className="font-RalewayBold text-center">Misi</div>
            <div className="w-[90%] font-LatoRegular text-xs space-y-1">
              {item.misi.map((data, index) => (
                <div key={index}>
                  <div className="flex space-x-1">
                    <div>{`${index + 1}.`}</div>
                    <div>{data}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
