import api from '@/lib/api';
import MovieCard from '@/components/MovieCard';

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const query = params.q || '';
  return {
    title: query ? `Tìm kiếm: ${query} - Ophim` : 'Tìm kiếm - Ophim',
    description: query ? `Kết quả tìm kiếm cho từ khóa '${query}'` : 'Tìm kiếm phim',
  };
}

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params.q || '';
  
  let movies = [];
  let total = 0;
  
  if (query) {
    try {
      const { data } = await api.get(`/tim-kiem?keyword=${encodeURIComponent(query)}`);
      movies = data.data.items || [];
      total = data.data.params?.pagination?.totalItems || 0;
    } catch (error) {
      console.error('Search error:', error);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Kết quả tìm kiếm</h1>
      {query && (
        <p className="text-gray-400 mb-8">
          Tìm thấy {total} kết quả cho "{query}"
        </p>
      )}
      
      {movies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 py-12">
          {query ? 'Không tìm thấy kết quả phù hợp' : 'Nhập từ khóa để tìm kiếm'}
        </p>
      )}
    </div>
  );
}
