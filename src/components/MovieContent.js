"use client";

import { useState } from "react";

export default function MovieContent({ content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2.5">Nội dung phim</h2>
      <div className="text-gray-300 leading-relaxed text-[13px] md:text-base">
        <span
          className={!isExpanded ? "line-clamp-3" : ""}
          dangerouslySetInnerHTML={{
            __html: content || "Đang cập nhật...",
          }}
        />
        {content && content.length > 100 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-1 text-green-500 hover:text-green-400 text-sm font-medium cursor-pointer inline"
          >
            {isExpanded ? "Thu gọn ▲" : "Xem thêm ▼"}
          </button>
        )}
      </div>
    </div>
  );
}
