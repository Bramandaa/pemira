import React from "react";

export default function TutorialCard({ number, step, desc }) {
  return (
    <div>
      <div className="relative flex w-full justify-between py-2 px-4 border rounded-xl shadow-sm shadow-[#000000]/25 overflow-hidden">
        <div className="flex gap-x-4">
          <div className="flex items-center font-RalewayBold text-xl">
            {number}
          </div>
          <div className="w-full">
            <div className="font-RalewayBold text-sm">{step}</div>
            <div className="font-LatoRegular text-xs text-[#000000]/50">
              {desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
