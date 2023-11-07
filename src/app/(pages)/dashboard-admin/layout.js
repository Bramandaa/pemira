import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import MobileOffIcon from "@mui/icons-material/MobileOff";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard",
  icons: { icon: "/assets/Logo.png" },
};
export default async function cekLogin({ children }) {
  const session = await getServerSession(authOptions);
  if (session?.user?.nama !== "Admin") {
    return redirect("/dashboard");
  }
  return Layout({ children });
}

async function Layout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="h-screen w-full overflow-hidden hidden md:block">
        {session && <Header session={session} />}
        <div className="flex h-full">
          <Navigation />
          <div className="w-full h-full p-6">{children}</div>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen justify-center items-center md:hidden space-y-4">
        <MobileOffIcon style={{ fontSize: 100 }} className="text-gray-500/30" />
        <div className="w-[300px] font-RalewayMedium text-center text-gray-500/50">
          This page is not available for mobile device, Please use Laptop, PC or
          any wider device.
        </div>
      </div>
    </>
  );
}
