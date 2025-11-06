"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Select } from "antd";

export default function Sidebar() {
  const router = useRouter();
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetch("https://ophim1.com/v1/api/danh-sach/phim-sap-chieu")
      .then((res) => res.json())
      .then((data) => setUpcomingMovies(data.data?.items?.slice(0, 15) || []))
      .catch(() => {});

    fetch("https://ophim1.com/v1/api/nam-phat-hanh")
      .then((res) => res.json())
      .then((data) => {
        const yearList = data.data?.items || [];
        const yearValues = yearList.map((item) => item.year);
        setYears(yearValues);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-2.5">
      <div className="bg-gray-900 rounded-lg p-4">
        <h3 className="text-lg font-bold mb-4">🔍 Tìm theo năm</h3>
        <Select
          showSearch
          placeholder="Chọn năm"
          className="w-full"
          onChange={(year) => router.push(`/nam-phat-hanh/${year}`)}
          options={years.map((y) => ({ label: String(y), value: y }))}
          filterOption={(input, option) =>
            option.label.toLowerCase().includes(input.toLowerCase())
          }
        />
      </div>
      <div className="bg-gray-900 rounded-lg p-4">
        <h3 className="text-lg font-bold mb-4">🎬 Phim sắp chiếu</h3>
        <div className="space-y-3 max-h-[600px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
          {upcomingMovies.map((movie) => (
            <Link
              key={movie._id}
              href={`/phim/${movie.slug}`}
              className="flex gap-3 hover:bg-gray-800 p-2 rounded transition"
            >
              <img
                src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
                alt={movie.name}
                className="w-16 h-20 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm line-clamp-2">
                  {movie.name}
                </p>
                <p className="text-xs text-gray-400">{movie.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
