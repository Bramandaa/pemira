import connectMongoDB from "@/libs/mongodb";
import Candidate from "@/models/candidate";
import { NextResponse } from "next/server";

export async function GET(request) {
  if (
    !request.nextUrl.searchParams.get("limit") &&
    !request.nextUrl.searchParams.get("page")
  ) {
    await connectMongoDB();
    const candidates = await Candidate.find();
    return NextResponse.json({ candidates }, { status: 200 });
  }
  const limitParam = request.nextUrl.searchParams.get("limit");
  const skipParam = request.nextUrl.searchParams.get("page");

  const limitValue = limitParam ? parseInt(limitParam, 10) : 10;
  const pageValue = skipParam ? parseInt(skipParam, 10) : 0;
  const skip = limitValue * pageValue;
  const limit = limitValue;

  await connectMongoDB();
  const candidates = await Candidate.find()
    .limit(limit)
    .skip(skip)
    .select("_id nomor nama_ketua nama_wakil image visi misi");
  const candidateCount = await Candidate.countDocuments();
  const totalPages = Math.ceil(candidateCount / limitValue);
  return NextResponse.json(
    { list: candidates, totalData: candidateCount, totalPages: totalPages },
    { status: 200 }
  );
}

export async function POST(request) {
  const { nomor, nama_ketua, nama_wakil, visi, misi, image } =
    await request.json();
  if (!nomor || !nama_ketua || !nama_wakil || !visi || !misi || !image) {
    return NextResponse.json(
      { statusText: "All fields are required." },
      { status: 400 }
    );
  }
  await connectMongoDB();
  await Candidate.create({
    nomor,
    nama_ketua,
    nama_wakil,
    visi,
    misi,
    image,
  });
  return NextResponse.json(
    { statusText: "Data Candidate Added Succesfully!" },
    { status: 200 }
  );
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ statusText: "Id not Found" }, { status: 400 });
  }
  await connectMongoDB();
  await Candidate.findByIdAndDelete(id);
  return NextResponse.json(
    { statusText: "Data Candidate Deleted Successfully!" },
    { status: 200 }
  );
}
