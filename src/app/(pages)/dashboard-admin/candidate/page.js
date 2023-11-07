import { getData } from "@/libs/functions";
import Candidate from "@/views/admin/candidate";
import React from "react";

export default async function Page() {
  const data = await getData({ uri: "candidate?limit=5&page=0" });
  return (
    <div>
      <Candidate tableName="Candidate Table" item={data || []} />
    </div>
  );
}
