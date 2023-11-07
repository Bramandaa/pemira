import Mahasiswa from "@/models/mahasiswa";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { jurusan, data } = await request.json();
  await Mahasiswa.updateMany(
    { jurusan: jurusan },
    { $set: { eligible: data === "Eligible" ? data : "Not Eligible" } }
  );
  return NextResponse.json(
    { statusText: "Schedule Successfully Set" },
    { status: 200 }
  );
}
