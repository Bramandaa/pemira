import Link from "next/link";
import React from "react";

export default function DashboardCard({
  icon,
  name,
  url,
  description,
  disabled,
}) {
  return (
    <Link
      className={`relative flex w-full justify-between py-2 px-4 border rounded-xl shadow-sm shadow-[#000000]/25 ${
        disabled && "opacity-40"
      } overflow-hidden`}
      href={disabled ? "" : url}
    >
      {/* {disabled && (
        <div className="absolute flex w-full h-full -mt-2 -ml-4 justify-center items-center font-RalewayBold text-red-600">
          Not Open
        </div>
      )} */}

      <div className="flex gap-x-4">
        {icon}
        <div className="w-[75%]">
          <div className="font-RalewayBold text-sm">{name}</div>
          <div className="font-LatoRegular text-xs text-[#000000]/50">
            {description}
          </div>
        </div>
      </div>
      <svg
        className="w-6 fill-[#000000]/50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
      </svg>
    </Link>
  );
}
