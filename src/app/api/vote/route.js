import connectMongoDB from "@/libs/mongodb";
import Mahasiswa from "@/models/mahasiswa";
import Vote from "@/models/vote";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { idMahasiswa, idCandidate } = await request.json();
  if (!idMahasiswa || !idCandidate) {
    return NextResponse.json(
      { statusText: "All fields are required." },
      { status: 400 }
    );
  }
  await connectMongoDB();
  const mahasiswa = await Mahasiswa.findOne({ _id: idMahasiswa });
  if (mahasiswa.eligible !== "Eligible") {
    return NextResponse.json(
      { statusText: "You Are Not be Able to Vote" },
      { status: 400 }
    );
  }
  if (mahasiswa.status === "Voted") {
    return NextResponse.json(
      { statusText: "You Already Vote" },
      { status: 400 }
    );
  }
  await Mahasiswa.findByIdAndUpdate(idMahasiswa, {
    status: "Voted",
  });
  await Vote.create({
    id_mahasiswa: idMahasiswa,
    id_candidate: idCandidate,
  });
  return NextResponse.json({ statusText: "Vote Success!" }, { status: 200 });
}
