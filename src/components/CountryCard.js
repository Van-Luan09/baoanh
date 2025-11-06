import Link from "next/link";

const countryFlags = {
  "trung-quoc": "cn",
  "han-quoc": "kr",
  "nhat-ban": "jp",
  "thai-lan": "th",
  "au-my": "us",
  "dai-loan": "tw",
  "hong-kong": "hk",
  "an-do": "in",
  anh: "gb",
  phap: "fr",
  canada: "ca",
  duc: "de",
  "tay-ban-nha": "es",
  "tho-nhi-ky": "tr",
  "ha-lan": "nl",
  indonesia: "id",
  nga: "ru",
  mexico: "mx",
  "ba-lan": "pl",
  uc: "au",
  "thuy-dien": "se",
  malaysia: "my",
  brazil: "br",
  philippines: "ph",
  "bo-dao-nha": "pt",
  y: "it",
  "dan-mach": "dk",
  uae: "ae",
  "na-uy": "no",
  "thuy-si": "ch",
  "nam-phi": "za",
  ukraina: "ua",
  "a-rap-xe-ut": "sa",
  bi: "be",
  ireland: "ie",
  colombia: "co",
  "phan-lan": "fi",
  "viet-nam": "vn",
  chile: "cl",
  "hy-lap": "gr",
  nigeria: "ng",
  argentina: "ar",
  singapore: "sg",
};

export default function CountryCard({ country }) {
  const flagCode = countryFlags[country.slug] || "un";
  const bgImage = `https://flagcdn.com/w640/${flagCode}.png`;

  return (
    <Link
      href={`/quoc-gia/${country.slug}`}
      className="relative h-32 rounded-lg overflow-hidden group "
    >
      <img
        src={bgImage}
        alt={country.name}
        className="absolute inset-0 w-full h-full object-cover object-center! transition-transform group-hover:scale-110 duration-300"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative h-full flex items-end p-4">
        <h3 className="text-lg font-bold text-white">{country.name}</h3>
      </div>
    </Link>
  );
}
