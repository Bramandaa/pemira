import connectMongoDB from "@/libs/mongodb";
import Mahasiswa from "@/models/mahasiswa";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { nim, nama, jurusan, program_studi, semester, kelas } =
    await request.json();
  if (!nim || !nama || !jurusan || !program_studi || !semester || !kelas) {
    return NextResponse.json(
      { statusText: "All fields are required." },
      { status: 400 }
    );
  }

  await connectMongoDB();
  await Mahasiswa.findByIdAndUpdate(id, {
    nim,
    nama,
    jurusan,
    program_studi,
    semester,
    kelas,
  });
  return NextResponse.json(
    { statusText: "Data Mahasiswa Updated Successfully!" },
    { status: 200 }
  );
}

export async function GET({ params }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ statusText: "Id not Found" }, { status: 400 });
  }
  await connectMongoDB();
  const mahasiswa = await Mahasiswa.findOne({ _id: id });
  return NextResponse.json({ mahasiswa }, { status: 200 });
}
