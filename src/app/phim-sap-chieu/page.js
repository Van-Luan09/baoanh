import { fetchWithCache } from '@/lib/api';
import MovieCard from '@/components/MovieCard';
import ClientPagination from '@/components/ClientPagination';

export const metadata = {
  title: 'Phim Sắp Chiếu - Ophim',
  description: 'Xem phim sắp chiếu, phim mới nhất sắp ra mắt',
};

export default async function PhimSapChieuPage({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params?.page || '1');
  
  const data = await fetchWithCache(`/danh-sach/phim-sap-chieu?page=${page}`);
  const movies = data.data || {};

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">⏰ Phim Sắp Chiếu</h1>
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
          basePath="/phim-sap-chieu"
        />
      )}
    </div>
  );
}
