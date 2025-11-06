import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/phim/${movie.slug}`} className="group block">
      <div className="relative aspect-ratio-2-3 overflow-hidden rounded-lg bg-gray-800">
        <Image
          src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
          alt={movie.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16vw, 12vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 right-1 bg-[#49d26d] px-1 py-1 rounded text-[10px] font-bold">
          {movie.year}
        </div>
        {movie.episode_current && (
          <div className="absolute top-2 left-1 bg-red-600 px-1 text-white py-1 rounded text-[10px] font-bold">
            {movie.episode_current}
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 p-3 w-full">
            <p className="text-xs text-gray-300 mb-1">{movie.origin_name}</p>
          </div>
        </div>
      </div>
      <h3 className="mt-2 font-semibold text-sm line-clamp-2 group-hover:text-[#49d26d] transition-colors">
        <Tooltip title={<span className="text-green-500">{movie.name}</span>}>
          <span className="text-gray-400 group-hover:text-green-500">
            {movie.name}
          </span>
        </Tooltip>
      </h3>
      {/* <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{movie.type === "series" ? "Phim bộ" : "Phim lẻ"}</span>
      </div> */}
    </Link>
  );
}
