import mongoose, { Schema } from "mongoose";

const mahasiswaSchema = new Schema(
  {
    nim: {
      type: String,
      required: true,
    },
    nama: {
      type: String,
      required: true,
    },
    jurusan: {
      type: String,
      required: true,
    },
    program_studi: {
      type: String,
      required: true,
    },
    kelas: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Not Voted",
    },
    eligible: {
      type: String,
      default: "Not Eligible",
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Mahasiswa =
  mongoose.models.Mahasiswa || mongoose.model("Mahasiswa", mahasiswaSchema);

export default Mahasiswa;
