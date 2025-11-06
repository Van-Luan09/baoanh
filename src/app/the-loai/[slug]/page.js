import { fetchWithCache } from "@/lib/api";
import MovieCard from "@/components/MovieCard";
import ClientPagination from "@/components/ClientPagination";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const data = await fetchWithCache(`/the-loai/${slug}`);
    const title = data.data.titlePage || "Thể loại";
    return {
      title: `${title} - Ophim`,
      description: `Xem phim ${title} hay nhất, mới nhất`,
    };
  } catch {
    return { title: "Thể loại - Ophim" };
  }
}

export default async function GenreMovies({ params, searchParams }) {
  const { slug } = await params;
  const query = await searchParams;
  const page = parseInt(query?.page || "1");

  const data = await fetchWithCache(`/the-loai/${slug}?page=${page}`);
  const movies = data.data || {};
  const title = data.data.titlePage || "Thể loại";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">🎥 Phim {title}</h1>
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
          basePath={`/the-loai/${slug}`}
        />
      )}
    </div>
  );
}
