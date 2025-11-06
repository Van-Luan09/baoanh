# 🎬 OpiHim - Website Xem Phim Next.js

Website xem phim online với Next.js App Router, tối ưu SEO và đầy đủ tính năng.

## ✨ Tính năng

- 🎥 Xem danh sách phim trending
- 🔍 Tìm kiếm phim
- 🎭 Phân loại theo thể loại
- 📱 Responsive design
- ⚡ Server-side rendering
- 🔎 SEO tối ưu (metadata, sitemap, robots.txt)
- 🎬 Xem trailer YouTube
- 👥 Thông tin diễn viên
- ⭐ Đánh giá và thông tin chi tiết

## 🚀 Cài đặt

1. Clone project
2. Cài đặt dependencies:
```bash
npm install
```

3. Lấy API key từ [TMDB](https://www.themoviedb.org/settings/api):
   - Đăng ký tài khoản miễn phí
   - Vào Settings > API
   - Copy API Key (v3 auth)

4. Cập nhật file `.env.local`:
```env
NEXT_PUBLIC_TMDB_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Chạy development server:
```bash
npm run dev
```

6. Mở [http://localhost:3000](http://localhost:3000)

## 📁 Cấu trúc

```
src/
├── app/
│   ├── phim/[id]/          # Chi tiết phim
│   ├── the-loai/           # Danh sách thể loại
│   │   └── [id]/           # Phim theo thể loại
│   ├── tim-kiem/           # Tìm kiếm
│   ├── layout.js           # Layout chính
│   ├── page.js             # Trang chủ
│   ├── sitemap.js          # Sitemap động
│   └── robots.js           # Robots.txt
├── components/
│   ├── Header.js           # Header + tìm kiếm
│   └── MovieCard.js        # Card phim
└── lib/
    └── tmdb.js             # TMDB API client
```

## 🎯 SEO Features

- ✅ Dynamic metadata cho mỗi trang
- ✅ Open Graph tags
- ✅ Sitemap tự động
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Image optimization
- ✅ Server-side rendering

## 🛠️ Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TMDB API

## 📝 API

Sử dụng [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) miễn phí.

## 🚀 Deploy

Deploy lên Vercel:
```bash
npm run build
```

Nhớ thêm environment variables trên Vercel dashboard.
