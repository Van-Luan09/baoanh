import api from "@/lib/api";
import CountryCard from "@/components/CountryCard";

export const metadata = {
  title: "Quốc gia - OpiHim",
  description:
    "Khám phá phim theo quốc gia: Trung Quốc, Hàn Quốc, Nhật Bản, Thái Lan, Âu Mỹ và nhiều quốc gia khác",
};

export default async function CountriesPage() {
  const { data } = await api.get("/quoc-gia");
  const countries = data.data.items || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">🌍 Quốc gia</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {countries.map((country) => (
          <CountryCard key={country._id} country={country} />
        ))}
      </div>
    </div>
  );
}
