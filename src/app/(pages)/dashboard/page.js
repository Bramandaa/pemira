import { getData } from "@/libs/functions";
import UserDashboard from "@/views/user/userDashboard";
import React from "react";

export default async function DashboardUserPage() {
  const data = await getData({ uri: "candidate" });
  return (
    <>
      <div className="bg-white">
        <UserDashboard item={data.candidates || []} />
      </div>
    </>
  );
}
