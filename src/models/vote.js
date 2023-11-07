import mongoose, { Schema } from "mongoose";

const voteSchema = new Schema(
  {
    id_mahasiswa: {
      type: Schema.Types.ObjectId,
      ref: "Mahasiswa",
      required: true,
    },
    id_candidate: {
      type: Schema.Types.ObjectId,
      ref: "Candidate",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Vote = mongoose.models.Vote || mongoose.model("Vote", voteSchema);

export default Vote;
