import connectMongoDB from "@/libs/mongodb";
import Candidate from "@/models/candidate";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { nomor, nama_ketua, nama_wakil, visi, misi, image } =
    await request.json();
  if (!nomor || !nama_ketua || !nama_wakil || !visi || !misi) {
    return NextResponse.json(
      { statusText: "All fields are required." },
      { status: 400 }
    );
  }

  await connectMongoDB();
  await Candidate.findByIdAndUpdate(id, {
    nomor,
    nama_ketua,
    nama_wakil,
    visi,
    misi,
    image,
  });
  return NextResponse.json(
    { statusText: "Data Candidate Updated Successfully!" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ statusText: "Id not Found" }, { status: 400 });
  }
  await connectMongoDB();
  const candidate = await Candidate.findOne({ _id: id });
  return NextResponse.json({ candidate }, { status: 200 });
}
