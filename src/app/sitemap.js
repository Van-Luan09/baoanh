import { tmdb } from '@/lib/tmdb';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const moviesData = await tmdb.getTrending();
  const genresData = await tmdb.getGenres();
  
  const movieUrls = moviesData.results?.map(movie => ({
    url: `${baseUrl}/phim/${movie.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  })) || [];

  const genreUrls = genresData.genres?.map(genre => ({
    url: `${baseUrl}/the-loai/${genre.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  })) || [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/the-loai`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...movieUrls,
    ...genreUrls,
  ];
}
