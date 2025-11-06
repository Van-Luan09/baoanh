import Link from "next/link";

const genreImages = {
  "hanh-dong":
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
  "tinh-cam":
    "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400",
  "hai-huoc":
    "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=400",
  "co-trang":
    "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=400",
  "tam-ly":
    "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=400",
  "hinh-su":
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400",
  "chien-tranh":
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400",
  "than-thoai":
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400",
  "kinh-di":
    "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400",
  "tai-lieu":
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400",
  "bi-an": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
  "phieu-luu":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
  "gia-dinh":
    "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400",
  "khoa-hoc":
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
  "vien-tuong":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
  "am-nhac":
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
  "the-thao":
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400",
  "vo-thuat": "https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=400",
  "chinh-kich":
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400",
  "hoat-hinh":
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400",
  "lich-su":
    "https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=400",
  "kinh-dien":
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400",
  "truyen-hinh":
    "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400",
};

export default function GenreCard({ genre }) {
  const bgImage =
    genreImages[genre.slug] ||
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400";

  return (
    <Link
      href={`/the-loai/${genre.slug}`}
      className="relative h-32 rounded-lg overflow-hidden group"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative h-full flex items-end p-4">
        <h3 className="text-lg font-bold text-white">{genre.name}</h3>
      </div>
    </Link>
  );
}
