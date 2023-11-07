"use client";
import { Menu, MenuItem } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";

export default function Header({ session }) {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleClose();
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="flex w-full h-14 justify-between items-center px-6 bg-[#1E5AF9] drop-shadow-md">
      <Link href="/dashboard-admin/" className="h-full">
        <div className="relative flex h-full w-8 ml-8">
          <Image
            src="/assets/Logo.png"
            sizes="100vh"
            alt="Logo"
            fill
            priority
            className="h-full w-auto object-contain"
          />
        </div>
      </Link>
      <div>
        <div
          className="relative cursor-pointer select-none font-RalewayMedium text-white"
          onClick={handleClick}
        >
          Hello, {session?.user?.nama}
        </div>
        <Menu
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <div className="space-y-2">
            <MenuItem onClick={handleLogout}>
              <LogoutIcon /> Logout
            </MenuItem>
          </div>
        </Menu>
      </div>
    </div>
  );
}
