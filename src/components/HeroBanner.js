"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "antd";
import { PlayCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function HeroBanner({ movies }) {
  const [current, setCurrent] = useState(0);
  const [movieDetails, setMovieDetails] = useState({});
  const [movieImages, setMovieImages] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [movies.length]);

  useEffect(() => {
    const movie = movies[current];
    if (movie && !movieDetails[movie._id]) {
      fetch(`https://ophim1.com/v1/api/phim/${movie.slug}`)
        .then((res) => res.json())
        .then((data) => {
          setMovieDetails((prev) => ({
            ...prev,
            [movie._id]: data.data.item,
          }));
        });

      fetch(`https://ophim1.com/v1/api/phim/${movie.slug}/images`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.data.images?.length > 0) {
            const backdrop = data.data.images.find(
              (img) => img.type === "backdrop"
            );
            if (backdrop) {
              setMovieImages((prev) => ({
                ...prev,
                [movie._id]: `https://image.tmdb.org/t/p/original${backdrop.file_path}`,
              }));
            }
          }
        });
    }
  }, [current, movies, movieDetails]);

  const movie = movies[current];
  const detail = movieDetails[movie?._id];
  const imageUrl =
    movieImages[movie?._id] ||
    `https://img.ophim.live/uploads/movies/${movie?.poster_url}`;
  if (!movie) return null;

  return (
    <div className="relative overflow-hidden h-full lg:h-[480px] xl:h-screen -mt-14!">
      <Image
        src={imageUrl}
        alt={movie.name}
        fill
        className="transition-all duration-1000"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black via-black md:via-black/60 to-black/50 md:to-transparent" />
      <div className="relative h-full flex items-end md:items-center md:pb-0">
        <div className="container mx-auto p-4">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              {movie.name}
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-3 md:mb-4">
              {movie.origin_name}
            </p>

            <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
              <span className="px-2 md:px-3 py-1 bg-[#49d26d] rounded text-xs md:text-sm font-bold">
                {movie.year}
              </span>
              <span className="px-2 md:px-3 py-1 bg-gray-800/80 rounded text-xs md:text-sm">
                {movie.quality}
              </span>
              <span className="px-2 md:px-3 py-1 bg-gray-800/80 rounded text-xs md:text-sm">
                {movie.lang}
              </span>
            </div>

            {detail?.content && (
              <div
                className="hidden md:block text-gray-300 leading-relaxed mb-6 line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html:
                    detail.content.replace(/<[^>]*>/g, "").slice(0, 200) +
                    "...",
                }}
              />
            )}

            <div className="flex gap-2 md:gap-4">
              <Link href={`/phim/${movie.slug}`}>
                <Button
                  type="primary"
                  size="middle"
                  icon={<PlayCircleOutlined />}
                  className="text-sm md:text-base"
                >
                  Xem ngay
                </Button>
              </Link>
              <Link href={`/phim/${movie.slug}`}>
                <Button
                  size="middle"
                  icon={<InfoCircleOutlined />}
                  className="text-sm md:text-base"
                >
                  Chi tiết
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 right-5 hidden lg:flex gap-2">
        {movies.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-5 h-1.5 rounded transition cursor-pointer hover:bg-[#49d26d] ${
              idx === current ? "bg-[#49d26d]" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
