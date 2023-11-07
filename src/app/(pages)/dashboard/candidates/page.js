import { getData } from "@/libs/functions";
import Candidates from "@/views/user/candidates";

export default async function CandidatePage() {
  const data = await getData({ uri: "candidate" });
  return (
    <div className="bg-white">
      <Candidates item={data || []} />
    </div>
  );
}
