import connectMongoDB from "@/libs/mongodb";
import Mahasiswa from "@/models/mahasiswa";
import { hash, compare } from "bcrypt";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const { id, old_password, new_password } = await request.json();
  if (!old_password || !new_password) {
    return NextResponse.json(
      { statusText: "Password Not Found" },
      { status: 401 }
    );
  }
  await connectMongoDB();
  const mahasiswa = await Mahasiswa.findOne({ _id: id });
  if (!mahasiswa) {
    return NextResponse.json({ statusText: "User Not Found" }, { status: 400 });
  }
  if (old_password === mahasiswa.password) {
    const newHashedPassword = await hash(new_password, 10);
    await Mahasiswa.findByIdAndUpdate(id, {
      password: newHashedPassword,
    });
    return NextResponse.json(
      { statusText: "Password Changed Successfully!" },
      { status: 200 }
    );
  }
  const isPasswordValid = await compare(old_password, mahasiswa.password);
  if (!isPasswordValid) {
    return NextResponse.json(
      { statusText: "Password Failed to Update, Old Password is Wrong!" },
      { status: 401 }
    );
  }
  const hashedPassword = await hash(new_password, 10);
  await Mahasiswa.findByIdAndUpdate(id, {
    password: hashedPassword,
  });
  return NextResponse.json(
    { statusText: "Password Changed Successfully!" },
    { status: 200 }
  );
}
