import { getServerSession } from "next-auth";
import Provider from "../components/auth/provider";
import "./globals.css";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata = {
  title: "PEMIRA",
  icons: { icon: "/assets/Logo.png" },
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <div>
          <Provider session={session}>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
