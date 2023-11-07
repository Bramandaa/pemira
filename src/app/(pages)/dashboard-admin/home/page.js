import { getData } from "@/libs/functions";
import Home from "@/views/admin/home";
import React from "react";

export default async function Page() {
  const data = await getData({ uri: "dataVote" });
  return (
    <div>
      <Home item={data} />
    </div>
  );
}
