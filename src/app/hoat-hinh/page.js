import { fetchWithCache } from "@/lib/api";
import MovieCard from "@/components/MovieCard";
import ClientPagination from "@/components/ClientPagination";

export async function generateMetadata() {
  try {
    const data = await fetchWithCache("/danh-sach/hoat-hinh");
    return {
      title: data.data.seoOnPage?.titleHead || "Hoạt Hình - Ophim",
      description:
        data.data.seoOnPage?.descriptionHead ||
        "Xem phim hoạt hình hay nhất, mới nhất",
    };
  } catch {
    return {
      title: "Hoạt Hình - Ophim",
      description: "Xem phim hoạt hình hay nhất, mới nhất",
    };
  }
}

export default async function HoatHinhPage({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params?.page || "1");

  const data = await fetchWithCache(`/danh-sach/hoat-hinh?page=${page}`);
  const movies = data.data || {};

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">🐱‍🏍 Hoạt Hình</h1>
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
          basePath="/hoat-hinh"
        />
      )}
    </div>
  );
}
