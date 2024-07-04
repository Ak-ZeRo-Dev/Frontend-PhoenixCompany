"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  !mounted && null;
  return (
    <>
      {theme === "light" ? (
        <BiMoon
          className=" cursor-pointer mx-4"
          fill="white"
          size={25}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BiSun
          className=" cursor-pointer mx-4"
          fill="white"
          size={25}
          onClick={() => setTheme("light")}
        />
      )}
    </>
  );
}
