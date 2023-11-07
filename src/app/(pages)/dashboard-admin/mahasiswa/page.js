import { getData } from "@/libs/functions";
import Mahasiswa from "@/views/admin/mahasiswa";
import React from "react";

export default async function Page() {
  const data = await getData({ uri: "mahasiswa?limit=5&page=0" });

  return (
    <div>
      <Mahasiswa tableName="Mahasiswa Table" item={data || []} />
    </div>
  );
}
