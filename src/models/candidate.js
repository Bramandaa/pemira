import mongoose, { Schema } from "mongoose";

const candidateSchema = new Schema(
  {
    nomor: {
      type: String,
      required: true,
    },
    nama_ketua: {
      type: String,
      required: true,
    },
    nama_wakil: {
      type: String,
      required: true,
    },
    visi: {
      type: String,
      required: true,
    },
    misi: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Candidate =
  mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema);

export default Candidate;
