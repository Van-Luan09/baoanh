"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Input, Button, Space, Drawer, Spin } from "antd";
import axios from "axios";
import { SearchOutlined, HeartFilled } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";
import { PlaySquareOutlined } from "@ant-design/icons";
import { VideoCameraOutlined } from "@ant-design/icons";
import { SmileOutlined } from "@ant-design/icons";
import { AppstoreOutlined } from "@ant-design/icons";
import { YoutubeFilled } from "@ant-design/icons";
import { ClockCircleOutlined } from "@ant-design/icons";
import GenreDropdown from "./GenreDropdown";
import CountryDropdown from "./CountryDropdown";
import LogoWithHearts from "./Hover";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search.trim().length > 1) {
      setLoading(true);
      const timer = setTimeout(async () => {
        try {
          const { data } = await axios.get(
            `https://ophim1.com/v1/api/tim-kiem?keyword=${encodeURIComponent(
              search
            )}`
          );
          setSearchResults(data.data.items?.slice(0, 5) || []);
        } catch {
          setSearchResults([]);
        }
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
    }
  }, [search]);

  const isActive = (path) =>
    pathname === path || pathname.startsWith(path + "/");
  const linkClass = (path) =>
    `transition flex items-center gap-2 px-4 h-full ${
      isActive(path)
        ? "text-[#49d26d] border-b-2 border-[#49d26d]"
        : "hover:text-orange-500 border-b-2 border-transparent"
    }`;

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/tim-kiem?q=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur">
      <div className=" mx-auto px-2 md:px-4 py-2.5 container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <LogoWithHearts />
            <nav className="hidden lg:flex h-16 items-center text-white!">
              <Link href="/" className={linkClass("/")}>
                <HomeOutlined /> Trang chủ
              </Link>
              <Link href="/phim-bo" className={linkClass("/phim-bo")}>
                <PlaySquareOutlined /> Phim bộ
              </Link>
              <Link href="/phim-le" className={linkClass("/phim-le")}>
                <VideoCameraOutlined /> Phim lẻ
              </Link>
              <Link href="/hoat-hinh" className={linkClass("/hoat-hinh")}>
                <SmileOutlined /> Hoạt hình
              </Link>
              <Link href="/tv-shows" className={linkClass("/tv-shows")}>
                <YoutubeFilled /> TV Shows
              </Link>
              {/* <Link
                href="/phim-sap-chieu"
                className={linkClass("/phim-sap-chieu")}
              >
                <ClockCircleOutlined /> Sắp chiếu
              </Link> */}
              <GenreDropdown />
              <CountryDropdown />
            </nav>{" "}
          </div>
          <div className="flex gap-x-1.5 items-center">
            <div className="relative">
              {searchOpen ? (
                <div className="animate-[slideIn_0.3s_ease-out]">
                  <Space.Compact className="w-48 md:w-80">
                    <Input
                      placeholder="Tìm kiếm phim..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onPressEnter={handleSearch}
                      onBlur={(e) => {
                        if (!e.relatedTarget?.closest(".search-results")) {
                          setTimeout(() => {
                            if (!search) setSearchOpen(false);
                            setSearchResults([]);
                          }, 200);
                        }
                      }}
                      autoFocus
                      allowClear
                      suffix={loading && <Spin size="small" />}
                    />
                    <Button type="primary" onClick={handleSearch}>
                      Tìm
                    </Button>
                  </Space.Compact>

                  {searchResults.length > 0 && (
                    <div className="search-results absolute top-full mt-2 w-48 md:w-80 bg-gray-900 rounded-lg shadow-2xl overflow-hidden z-50">
                      {searchResults.map((movie) => (
                        <Link
                          key={movie._id}
                          href={`/phim/${movie.slug}`}
                          className="flex gap-3 p-3 hover:bg-gray-800 transition"
                          onClick={() => {
                            setSearchOpen(false);
                            setSearch("");
                            setSearchResults([]);
                          }}
                        >
                          <img
                            src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
                            alt={movie.name}
                            className="w-12 h-16 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm line-clamp-1">
                              {movie.name}
                            </p>
                            <p className="text-xs text-gray-400 line-clamp-1">
                              {movie.origin_name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {movie.year}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  style={{ borderRadius: 100 }}
                  icon={<SearchOutlined />}
                  onClick={() => setSearchOpen(true)}
                  size=""
                />
              )}
            </div>

            <Button
              icon={<MenuOutlined />}
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden!"
            />
          </div>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className={`text-lg ${linkClass("/")}`}
          >
            <HomeOutlined /> Trang chủ
          </Link>
          <Link
            href="/phim-bo"
            onClick={() => setDrawerOpen(false)}
            className={`text-lg ${linkClass("/phim-bo")}`}
          >
            <PlaySquareOutlined /> Phim bộ
          </Link>
          <Link
            href="/phim-le"
            onClick={() => setDrawerOpen(false)}
            className={`text-lg ${linkClass("/phim-le")}`}
          >
            <VideoCameraOutlined /> Phim lẻ
          </Link>
          <Link
            href="/hoat-hinh"
            onClick={() => setDrawerOpen(false)}
            className={`text-lg ${linkClass("/hoat-hinh")}`}
          >
            <SmileOutlined /> Hoạt hình
          </Link>
          <Link
            href="/tv-shows"
            onClick={() => setDrawerOpen(false)}
            className={`text-lg ${linkClass("/tv-shows")}`}
          >
            <YoutubeFilled /> TV Shows
          </Link>
          <Link
            href="/the-loai"
            onClick={() => setDrawerOpen(false)}
            className={`text-lg ${linkClass("/the-loai")}`}
          >
            <AppstoreOutlined /> Thể loại
          </Link>
          <Link
            href="/quoc-gia"
            onClick={() => setDrawerOpen(false)}
            className={`text-lg ${linkClass("/quoc-gia")}`}
          >
            <AppstoreOutlined /> Quốc gia
          </Link>
        </div>
      </Drawer>
    </header>
  );
}
