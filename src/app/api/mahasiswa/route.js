import connectMongoDB from "@/libs/mongodb";
import Mahasiswa from "@/models/mahasiswa";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function GET(request) {
  const limitParam = request.nextUrl.searchParams.get("limit");
  const skipParam = request.nextUrl.searchParams.get("page");

  const limitValue = limitParam ? parseInt(limitParam, 10) : 10;
  const pageValue = skipParam ? parseInt(skipParam, 10) : 0;
  const skip = limitValue * pageValue;
  const limit = limitValue;

  await connectMongoDB();
  const mahasiswas = await Mahasiswa.find()
    .limit(limit)
    .skip(skip)
    .select("_id nim nama jurusan program_studi semester kelas");
  const mahasiswaCount = await Mahasiswa.countDocuments();
  const totalPages = Math.ceil(mahasiswaCount / limitValue);
  return NextResponse.json(
    { list: mahasiswas, totalData: mahasiswaCount, totalPages: totalPages },
    { status: 200 }
  );
}

export async function POST(request) {
  const { nim, nama, jurusan, program_studi, kelas, semester, password } =
    await request.json();

  if (
    !nim ||
    !nama ||
    !jurusan ||
    !program_studi ||
    !semester ||
    !kelas ||
    !password
  ) {
    return NextResponse.json(
      { statusText: "All fields are required." },
      { status: 400 }
    );
  }
  const hashedPassword = await hash(password, 10);
  await connectMongoDB();
  await Mahasiswa.create({
    nim,
    nama,
    jurusan,
    program_studi,
    semester,
    kelas,
    password: hashedPassword,
  });
  return NextResponse.json(
    { statusText: "Data Mahasiswa Added Succesfully!" },
    { status: 200 }
  );
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ statusText: "Id not Found" }, { status: 400 });
  }
  await connectMongoDB();
  await Mahasiswa.findByIdAndDelete(id);
  return NextResponse.json(
    { statusText: "Data Mahasiswa Deleted Successfully!" },
    { status: 200 }
  );
}
