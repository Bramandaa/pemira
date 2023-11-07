import React from "react";

export default function Candidates() {
  return (
    <div className="flex">
      <div className="w-64 flex justify-center aspect-[4/2] bg-white">
        <img className="h-full" src="/assets/candidate.png" />
      </div>
      <div className="w-64 flex justify-center aspect-[4/2] bg-white">
        <img className="h-full" src="/assets/candidate.png" />
      </div>
    </div>
  );
}
