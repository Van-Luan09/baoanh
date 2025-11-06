import { fetchWithCache } from "@/lib/api";
import HeroBanner from "@/components/HeroBanner";
import MovieSection from "@/components/MovieSection";

export async function generateMetadata() {
  try {
    const data = await fetchWithCache("/home");
    return {
      title: data.data.seoOnPage.titleHead,
      description: data.data.seoOnPage.descriptionHead,
    };
  } catch {
    return {
      title: "Ophim - Xem phim online miễn phí",
      description: "Xem phim online chất lượng cao miễn phí",
    };
  }
}

export default async function Home() {
  const [homeData, phimBoData, phimLeData] = await Promise.all([
    fetchWithCache("/home"),
    fetchWithCache("/danh-sach/phim-bo"),
    fetchWithCache("/danh-sach/phim-le"),
  ]);

  const movies = homeData.data.items || [];
  const phimBo = phimBoData.data.items || [];
  const phimLe = phimLeData.data.items || [];

  return (
    <>
      <HeroBanner movies={movies} />
      <div className="container mx-auto p-4 ">
        <MovieSection
          title="🔥 Phim Mới Cập Nhật"
          movies={movies.slice(0, 16)}
        />

        <MovieSection
          title="📺 Phim Bộ Hot"
          movies={phimBo.slice(0, 16)}
          viewAllLink="/phim-bo"
        />

        <MovieSection
          title="🎬 Phim Lẻ Hay"
          movies={phimLe.slice(0, 16)}
          viewAllLink="/phim-le"
        />
      </div>
    </>
  );
}
