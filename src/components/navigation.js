"use client";
import { List, ListItemButton } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navigation() {
  const router = usePathname();

  const menus = [
    {
      name: "Home",
      url: "/home",
    },
    {
      name: "Mahasiswa",
      url: "/mahasiswa",
    },
    {
      name: "Candidate",
      url: "/candidate",
    },
    {
      name: "Schedule",
      url: "/schedule",
    },
  ];

  return (
    <div className="flex flex-col min-w-[15%] bg-white drop-shadow-md">
      {menus.map((menu, index) => (
        <List component="nav" key={index}>
          <div
            className={`${
              router == `/dashboard-admin${menu.url}`
                ? "bg-[#1E5AF9] text-white shadow-lg ml-2 -mr-2"
                : ""
            } font-RalewayMedium`}
          >
            <Link
              href={`/dashboard-admin/${menu.url}`}
              className="w-full h-full"
            >
              <ListItemButton>
                <div className="pl-3 py-2">{menu.name}</div>
              </ListItemButton>
            </Link>
          </div>
        </List>
      ))}
    </div>
  );
}
