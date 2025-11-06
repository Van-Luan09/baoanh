import { fetchWithCache } from "@/lib/api";
import MovieCard from "@/components/MovieCard";
import ClientPagination from "@/components/ClientPagination";

export async function generateMetadata({ params }) {
  const { year } = await params;
  return {
    title: `Phim năm ${year} - Ophim`,
    description: `Xem phim phát hành năm ${year} hay nhất, mới nhất`,
  };
}

export default async function YearMovies({ params, searchParams }) {
  const { year } = await params;
  const query = await searchParams;
  const page = parseInt(query?.page || "1");

  const data = await fetchWithCache(`/nam-phat-hanh/${year}?page=${page}`);
  const movies = data.data || {};

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">📅 Phim năm {year}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {movies.items?.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>

      {movies.params?.pagination && (
        <ClientPagination
          current={page}
          total={movies.params.pagination.totalItems}
          pageSize={movies.params.pagination.totalItemsPerPage}
          basePath={`/nam-phat-hanh/${year}`}
        />
      )}
    </div>
  );
}
