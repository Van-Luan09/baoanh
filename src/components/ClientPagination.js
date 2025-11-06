"use client";

import { Pagination } from "antd";
import { useRouter } from "next/navigation";

export default function ClientPagination({ current, total, pageSize, basePath }) {
  const router = useRouter();

  return (
    <div className="flex justify-center mt-8">
      <Pagination
        current={current}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        onChange={(page) => {
          router.push(`${basePath}?page=${page}`);
        }}
      />
    </div>
  );
}
