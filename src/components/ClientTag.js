"use client";

import { Tag } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

export default function ClientTag({ movie }) {
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        <Tag icon={<CalendarOutlined />}>{movie?.year}</Tag>
        <Tag icon={<ClockCircleOutlined />}>{movie?.time}</Tag>
        <Tag icon={<VideoCameraOutlined />}>{movie?.episode_current}</Tag>
        <Tag color="blue">{movie?.quality}</Tag>
        <Tag color="green">{movie?.lang}</Tag>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {movie.category?.map((cat) => (
          <Tag key={cat.id} color="red">
            {cat.name}
          </Tag>
        ))}
      </div>
    </>
  );
}
