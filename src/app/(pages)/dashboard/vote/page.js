import { getData } from "@/libs/functions";
import Vote from "@/views/user/vote";

export default async function Page() {
  const data = await getData({ uri: "candidate" });
  return (
    <div className="bg-white">
      <Vote item={data || []} />
    </div>
  );
}
