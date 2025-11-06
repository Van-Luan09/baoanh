"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Dropdown } from "antd";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function CountryDropdown() {
  const pathname = usePathname();
  const [countries, setCountries] = useState([]);
  const isActive = pathname.startsWith("/quoc-gia");

  useEffect(() => {
    fetch("https://ophim1.com/v1/api/quoc-gia")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.data.items || []);
      })
      .catch(() => setCountries([]));
  }, []);

  const items = [
    {
      key: "countries",
      type: "group",
      label: (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-2 max-h-96 overflow-y-auto">
          {countries.map((country) => {
            const isCountryActive = pathname.startsWith(
              `/quoc-gia/${country.slug}`
            );
            return (
              <Link
                key={country._id}
                href={`/quoc-gia/${country.slug}`}
                className={`px-3 py-2 rounded transition text-sm ${
                  isCountryActive
                    ? "bg-[#49d26d]! text-white!"
                    : "hover:bg-orange-500! hover:text-white!"
                }`}
              >
                {country.name}
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
            : "hover:text-orange-500 border-b-2 border-transparent"
        }`}
      >
        <GlobalOutlined /> Quốc gia <DownOutlined className="text-xs" />
      </div>
    </Dropdown>
  );
}
