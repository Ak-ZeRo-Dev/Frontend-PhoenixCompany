"use client";
import { INavItem } from "@/types/layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function NavItems() {
  const [categories, setCategories] = useState<INavItem[]>([]);
  const [services, setServices] = useState<INavItem[]>([]);
  const [learnNow, setLearnNow] = useState<INavItem[]>([]);

  const [servicesMenu, setServicesMenu] = useState<boolean>(false);
  const [learnNowMenu, setLearnNowMenu] = useState<boolean>(false);
  //TODO
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handelMenu = (url: string) => {
    if (url === "/services") {
      setLearnNowMenu(false);
      setServicesMenu((last) => !last);
      setIsMenuOpen(true);
    }
    if (url === "/learn-now") {
      setServicesMenu(false);
      setLearnNowMenu((last) => !last);
      setIsMenuOpen(true);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/layout/get-layout", {
        params: {
          type: "navItems",
        },
      })
      .then((response) => {
        setCategories(response.data.layout.navItems.main);
        setServices(response.data.layout.navItems.services);
        setLearnNow(response.data.layout.navItems.learnNow);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex justify-center items-center gap-2">
      {categories
        .map((ele: INavItem) =>
          ele.url === "/learn-now" || ele.url === "/services" ? (
            <div key={ele._id} className="flex flex-col">
              <div
                onClick={() => handelMenu(ele.url)}
                className={`flex  justify-normal items-center cursor-pointer hover:text-[#38BDF8] focus:text-[#38BDF8] transition  duration-500 h-20 w-[90px]`}
              >
                <IoIosArrowDown /> {ele.title.ar}
              </div>
              <div
                className={`${
                  ele.url === "/services" && servicesMenu
                    ? "flex"
                    : ele.url === "/learn-now" && learnNowMenu
                    ? "flex"
                    : "hidden"
                } absolute top-full z-40   flex-col border-t-2 border-[#6F2DF4] text-black dark:text-white items-end bg-[#d3d3]`}
              >
                {ele.url === "/learn-now"
                  ? learnNow.map((link) => (
                      <Link href={link.url} key={link._id} className={``}>
                        {link.title.ar}
                      </Link>
                    ))
                  : services.map((link) => (
                      <Link href={link.url} key={link._id} className={``}>
                        {link.title.ar}
                      </Link>
                    ))}
              </div>
            </div>
          ) : (
            <Link
              key={ele._id}
              href={ele.url}
              className="hover:text-[#38BDF8] transition duration-500 h-20 flex justify-normal items-center w-[90px]"
            >
              {ele.title.ar}
            </Link>
          )
        )
        .reverse()}
    </div>
  );
}
