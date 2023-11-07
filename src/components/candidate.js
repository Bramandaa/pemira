import Image from "next/image";
import Link from "next/link";

export default function Candidate({ number, src, data }) {
  return (
    <div>
      <div className="relative w-full aspect-[7/4] border-2 rounded-lg drop-shadow-md overflow-hidden">
        <Image
          src={src}
          sizes="100vh"
          alt={src}
          fill
          priority
          className="h-full w-auto object-cover"
        />
        <div className="absolute w-[60%] py-1 px-4 bottom-2 left-1/2 transform -translate-x-1/2 rounded-md bg-white drop-shadow-md">
          <div className="font-RalewayMedium text-xs">
            <span className="font-RalewayExtraBold text-sm">{`${number}.`}</span>
            {data}
          </div>
        </div>
      </div>
    </div>
  );
}
