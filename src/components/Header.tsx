"use client";
import SearchBar from "@/utils/SearchBar";
import NavItems from "../utils/NavItems";
import ThemeSwitcher from "../utils/theme/ThemeSwitcher";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";

const logo = {
  name: "Phoenix Company",
  url: "",
};

export default function Header() {
  const [active, setActive] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        window.scrollY > 80 ? setActive(true) : setActive(false)
      );
    }
  }, []);

  return (
    <header className="relative w-full flex justify-between items-center flex-wrap h-20 z-50 bg-gradient-to-b from-gray-900 to-black  text-white border-b dark:border[#ffffff1c]">
      <div className="container flex justify-between items-center">
        <Link href={"/"} className="flex justify-center items-center">
          <Image src={logo.url} alt={logo.name} width={40} height={50} />
          <h3 className=" text-lg">{logo.name}</h3>
        </Link>
        <SearchBar />
        <div className="flex items-center gap-8">
          <NavItems />
          <div className="flex border-l-2 border-[#020202] pl-2">
            <BsPersonCircle
              size={25}
              className="color-[#64748B] hover:color-white cursor-pointer"
            />
            {/* <Account /> */}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      {/* <div
        className={`fixed top-0 left-0   h-20  flex justify-between items-center  ${
          active
            ? "dark:bg-opacity-50 shadow-xl transition duration-500"
            : "dark:shadow"
        }`}
      >
        
      </div> */}

      {/* <div>
        <SearchBar />
        <Social />
      </div> */}
    </header>
  );
}
