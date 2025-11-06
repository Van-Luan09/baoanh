import api from '@/lib/api';
import GenreCard from '@/components/GenreCard';

export const metadata = {
  title: 'Thể loại phim - OpiHim',
  description: 'Khám phá phim theo thể loại: Hành động, Hài, Kinh dị, Tình cảm và nhiều thể loại khác',
};

export default async function GenresPage() {
  const { data } = await api.get('/the-loai');
  const genres = data.data.items || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Thể loại phim</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {genres.map(genre => (
          <GenreCard key={genre._id} genre={genre} />
        ))}
      </div>
    </div>
  );
}
