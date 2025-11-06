'use client';

import Link from "next/link";
import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

export default function ClientButton({ slug, episodes }) {
  return (
    <div>
      <Link href={`/xem-phim/${slug}`}>
        <Button type="primary" danger size="large" icon={<PlayCircleOutlined />} className="mb-6">
          Xem phim
        </Button>
      </Link>
      <h3 className="text-xl font-semibold mb-4">Danh sách tập</h3>
      <div className="flex flex-wrap gap-2">
        {episodes?.map((ep, idx) => (
          <Link key={ep.slug} href={`/xem-phim/${slug}?tap=${idx}`}>
            <Button>{ep.name}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
