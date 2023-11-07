import Image from "next/image";
import React from "react";

export default function Home({ item }) {
  return (
    <div>
      <div className="grid grid-cols-2 space-x-4">
        {item.data.map((data, index) => (
          <div
            key={index}
            className="flex flex-col w-full p-4 items-center rounded-md shadow-lg"
          >
            <div className="relative w-40 aspect-square">
              <Image
                src={data.candidateData[0].image}
                sizes="100vh"
                alt=""
                fill
                priority
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="font-RalewayBold">
              Pasangan Calon {data.candidateData[0].nomor}
            </div>
            <div className="font-RalewayMedium">
              {`${data.vote_count} Suara dari ${item.totalUser} mahasiswa`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
