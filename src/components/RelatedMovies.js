"use client";

import { Tabs } from "antd";
import MovieCard from "./MovieCard";

export default function RelatedMovies({
  categories,
  relatedByCategory,
  currentSlug,
}) {
  const items = categories.map((cat) => ({
    key: cat.slug,
    label: cat.name,
    children: (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
        {relatedByCategory[cat.slug]
          ?.filter((m) => m.slug !== currentSlug)
          .slice(0, 18)
          .map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
      </div>
    ),
  }));

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold mb-2.5">🎬 Phim Liên Quan</h2>
      <Tabs items={items} />
    </div>
  );
}
