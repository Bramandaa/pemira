"use client";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div className="relative max-h-screen h-screen bg-[#1E5AF9]">
        <div className="flex h-fit justify-center pt-8">
          <Image
            className="w-[47px]"
            src="/assets/Logo.png"
            alt="Vote Icon"
            quality={100}
            width={162}
            height={190}
            priority
          />
        </div>
        <div className="flex h-[50vh] justify-center pt-8">
          <img className="h-full" src="/assets/voteIcon1.png" />
        </div>
        <div className="absolute w-full h-[40vh] bottom-0 bg-white py-8 px-6">
          <div className="font-RalewayBold text-[42px] text-black">
            Selamat Datang
          </div>
          <div className="font-LatoRegular text-black leading-tight pb-6">
            Di Website Pemilu Raya Keluarga Besar Mahasiswa Politeknik Negeri
            Bali 2023
          </div>
          <Link href="/login">
            <button className="flex w-fit items-center bg-[#1E5AF9] font-RalewayMedium text-[16px] text-white gap-x-2 py-2 px-8 rounded-full">
              Masuk
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
