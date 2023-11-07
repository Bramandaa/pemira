import { getData } from "@/libs/functions";
import Candidate from "@/views/user/candidate";

export default async function CandidatePage({ params }) {
  const data = await getData({ uri: `candidate/${params.id}` });
  return (
    <div className="bg-white">
      <Candidate item={data.candidate || []} />
    </div>
  );
}
