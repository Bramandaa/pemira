export const metadata = {
  title: "Dashboard",
  icons: { icon: "/assets/Logo.png" },
};

export default async function Layout({ children }) {
  return (
    <div className="md:max-w-[450px] bg-white h-screen mx-auto drop-shadow-md">
      {children}
    </div>
  );
}
