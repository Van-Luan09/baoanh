const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const tmdb = {
  getTrending: async (page = 1) => {
    const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=vi-VN&page=${page}`, { next: { revalidate: 3600 } });
    return res.json();
  },
  
  getMovieDetails: async (id) => {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=vi-VN&append_to_response=videos,credits`, { next: { revalidate: 3600 } });
    return res.json();
  },
  
  searchMovies: async (query, page = 1) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=vi-VN&query=${encodeURIComponent(query)}&page=${page}`, { next: { revalidate: 3600 } });
    return res.json();
  },
  
  getByGenre: async (genreId, page = 1) => {
    const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=vi-VN&with_genres=${genreId}&page=${page}`, { next: { revalidate: 3600 } });
    return res.json();
  },
  
  getGenres: async () => {
    const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=vi-VN`, { next: { revalidate: 86400 } });
    return res.json();
  },
  
  getImageUrl: (path, size = 'w500') => path ? `${IMAGE_BASE_URL}/${size}${path}` : '/placeholder.jpg',
};
