"use client";

import Link from "next/link";
import Image from "next/image";
import {
  HeartFilled,
  UpOutlined,
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import LogoWithHearts from "./Hover";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-[300px,1fr] md:flex gap-8 mb-8">
          <div className="max-w-[300px] flex justify-center items-center flex-col">
            <LogoWithHearts />
            <p className="text-gray-400 text-sm leading-relaxed">
              Khám phá thế giới điện ảnh đỉnh cao với hàng ngàn bộ phim bom tấn,
              phim bộ Hàn Quốc, Trung Quốc, phim lẻ Hollywood, hoạt hình Nhật
              Bản và TV Shows hấp dẫn. Chất lượng HD/Full HD sắc nét, phụ đề
              Việt chuẩn, tốc độ load nhanh như chớp. Cập nhật phim mới liên tục
              24/7, không quảng cáo làm phiền. Trải nghiệm xem phim mượt mà trên
              mọi thiết bị - từ điện thoại, máy tính đến Smart TV. Hoàn toàn
              miễn phí, không cần đăng ký!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Danh Mục</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/phim-bo"
                    className="text-gray-400 hover:text-[#49d26d] transition"
                  >
                    Phim Bộ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/phim-le"
                    className="text-gray-400 hover:text-[#49d26d] transition"
                  >
                    Phim Lẻ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hoat-hinh"
                    className="text-gray-400 hover:text-[#49d26d] transition"
                  >
                    Hoạt Hình
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tv-shows"
                    className="text-gray-400 hover:text-[#49d26d] transition"
                  >
                    TV Shows
                  </Link>
                </li>
                <li>
                  <Link
                    href="/phim-sap-chieu"
                    className="text-gray-400 hover:text-[#49d26d] transition"
                  >
                    Sắp Chiếu
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Thể Loại</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/the-loai"
                    className="text-gray-400 hover:text-[#49d26d] transition"
                  >
                    Tất cả thể loại
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quoc-gia"
                    className="text-gray-400 hover:text-[#49d26d] transition"
                  >
                    Quốc gia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tim-kiem"
                    className="text-gray-400 hover:text-[#49d26d] transition"
                  >
                    Tìm kiếm
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Thông Tin</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">Email: nv95.02.2025@gmail.com</li>
                <li className="text-gray-400">Hotline: 1900 xxxx</li>
                <li className="text-gray-400">Hỗ trợ: 24/7</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Kết Nối</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition text-2xl"
                >
                  <FacebookFilled />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition text-2xl"
                >
                  <YoutubeFilled />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition text-2xl"
                >
                  <InstagramFilled />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition text-2xl"
                >
                  <TwitterOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>
            © 2025 Made with <HeartFilled className="text-red-500 mx-1" /> by
            Timothy
          </p>
        </div>
      </div>

      <FloatButton.BackTop icon={<UpOutlined />} tooltip="Back to top" />
    </footer>
  );
}
