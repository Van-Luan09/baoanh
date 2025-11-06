import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";
import MovieCard from "./MovieCard";

export default function MovieSection({ title, movies, viewAllLink }) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {viewAllLink && (
          <Link
            href={viewAllLink}
            className="text-[#49d26d] hover:underline flex items-center gap-1"
          >
            Xem tất cả <RightOutlined className="text-xs" />
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
