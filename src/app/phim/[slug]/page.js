import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";
import { notFound } from "next/navigation";
import ClientTag from "@/components/ClientTag";
import RelatedMovies from "@/components/RelatedMovies";
import MoviePlayer from "@/components/MoviePlayer";
import Sidebar from "@/components/Sidebar";
import MovieContent from "@/components/MovieContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const { data } = await api.get(`/phim/${slug}`);
    const movie = data.data.item;
    return {
      title: `${movie.name} - Ophim`,
      description:
        movie.content?.replace(/<[^>]*>/g, "").slice(0, 160) ||
        `Xem phim ${movie.name} online`,
      openGraph: {
        title: movie.name,
        description: movie.content?.replace(/<[^>]*>/g, "").slice(0, 160),
        images: [
          `https://img.ophim.live/uploads/movies${
            movie.thumb_url || movie.poster_url
          }`,
        ],
      },
    };
  } catch {
    return { title: "Không tìm thấy phim" };
  }
}

export default async function MovieDetail({ params }) {
  const { slug } = await params;
  try {
    const { data } = await api.get(`/phim/${slug}`);
    const movie = data.data.item;

    const relatedByCategory = {};
    if (movie.category?.length > 0) {
      await Promise.all(
        movie.category.map(async (cat) => {
          try {
            const { data: relatedData } = await api.get(
              `/the-loai/${cat.slug}`
            );
            relatedByCategory[cat.slug] = relatedData.data.items || [];
          } catch {}
        })
      );
    }

    return (
      <div className="container mx-auto px-2 md:px-4 mt-20!">
        {(movie.episodes?.length > 0 || movie.trailer_url) && (
          <MoviePlayer
            episodes={movie.episodes?.[0]?.server_data || []}
            trailerUrl={movie.trailer_url}
          />
        )}

        <div className="flex gap-5 mt-5">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-48 shrink-0">
                <Image
                  src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
                  alt={movie.name}
                  width={192}
                  height={288}
                  className="rounded-lg object-cover w-full"
                  priority
                />
              </div>

              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2.5">{movie.name}</h1>
                <p className="text-xl text-gray-400 mb-2.5">
                  {movie.origin_name}
                </p>
                <ClientTag movie={movie} />

                <MovieContent content={movie.content} />

                {movie.actor?.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Diễn viên</h3>
                    <p className="text-gray-300">{movie.actor.join(", ")}</p>
                  </div>
                )}

                {movie.director?.length > 0 && (
                  <div className="mb-2.5">
                    <h3 className="text-lg font-semibold mb-2">Đạo diễn</h3>
                    <p className="text-gray-300">{movie.director.join(", ")}</p>
                  </div>
                )}
              </div>
            </div>

            {movie.category?.length > 0 &&
              Object.keys(relatedByCategory).length > 0 && (
                <RelatedMovies
                  categories={movie.category}
                  relatedByCategory={relatedByCategory}
                  currentSlug={slug}
                />
              )}
          </div>

          <div className="hidden lg:block w-1/4 shrink-0">
            <div className="sticky top-20">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
