import connectMongoDB from "@/libs/mongodb";
import Mahasiswa from "@/models/mahasiswa";
import { compare } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { nim, password } = await request.json();
  if (!nim || !password) {
    return NextResponse.json(
      { statusText: "All fields are required." },
      { status: 400 }
    );
  }
  await connectMongoDB();
  const mahasiswa = await Mahasiswa.findOne({ nim });
  if (!mahasiswa) {
    return NextResponse.json({ statusText: "User not Found" }, { status: 400 });
  }

  if (mahasiswa.password === password) {
    return NextResponse.json({ data: mahasiswa }, { status: 200 });
  }

  const isPasswordValid = await compare(password, mahasiswa.password);
  if (isPasswordValid) {
    return NextResponse.json({ data: mahasiswa }, { status: 200 });
  }
  return NextResponse.json({ statusText: "Login Failed" }, { status: 400 });
}
