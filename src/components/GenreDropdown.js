"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown } from "antd";
import { AppstoreOutlined, DownOutlined } from "@ant-design/icons";
import api from "@/lib/api";

export default function GenreDropdown() {
  const pathname = usePathname();
  const [genres, setGenres] = useState([]);
  const isActive = pathname.startsWith("/the-loai");

  useEffect(() => {
    api.get("/the-loai").then(({ data }) => {
      setGenres(data.data.items || []);
    });
  }, []);

  const items = [
    {
      key: "genres",
      type: "group",
      label: (
        <div className="grid grid-cols-3 gap-2 p-2 max-h-96 overflow-y-auto">
          {genres.map((genre) => {
            const isGenreActive = pathname.startsWith(
              `/the-loai/${genre.slug}`
            );
            return (
              <Link
                key={genre._id}
                href={`/the-loai/${genre.slug}`}
                className={`px-3 py-2 rounded transition text-sm ${
                  isGenreActive
                    ? "bg-[#49d26d]! text-white!"
                    : "hover:bg-orange-500! hover:text-white!"
                }`}
              >
                {genre.name}
              </Link>
            );
          })}
        </div>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["hover"]} placement="bottomLeft">
      <div
        className={`flex items-center gap-2 px-4 h-full cursor-pointer transition ${
          isActive
            ? "text-[#49d26d] border-b-2 border-[#49d26d]"
            : "hover:text-orange-500! border-b-2 border-transparent"
        }`}
      >
        <AppstoreOutlined /> Thể loại <DownOutlined className="text-xs" />
      </div>
    </Dropdown>
  );
}
