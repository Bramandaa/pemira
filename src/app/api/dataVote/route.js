import connectMongoDB from "@/libs/mongodb";
import Mahasiswa from "@/models/mahasiswa";
import Vote from "@/models/vote";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET() {
  await connectMongoDB();
  const voteData = await Vote.aggregate([
    {
      $group: {
        _id: "$id_candidate",
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        id_candidate: "$_id",
        vote_count: "$count",
      },
    },
    {
      $lookup: {
        from: "candidates",
        localField: "id_candidate",
        foreignField: "_id",
        as: "candidateData",
      },
    },
    {
      $project: {
        id_candidate: 1,
        vote_count: 1,
        "candidateData.image": 1,
      },
    },
  ]);

  const mahasiswaCount = await Mahasiswa.countDocuments();

  return NextResponse.json(
    { data: voteData, totalUser: mahasiswaCount },
    { status: 200 }
  );
}
