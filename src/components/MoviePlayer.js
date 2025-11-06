"use client";

import { useState, useEffect, useRef } from "react";
import { Tabs } from "antd";
import VideoPlayer from "./VideoPlayer";
import { CloseOutlined } from "@ant-design/icons";

export default function MoviePlayer({ episodes, trailerUrl }) {
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [miniClosed, setMiniClosed] = useState(false);
  const playerRef = useRef(null);

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const videoId = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/
    )?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(trailerUrl);

  useEffect(() => {
    const handleScroll = () => {
      if (playerRef.current) {
        const rect = playerRef.current.getBoundingClientRect();
        setIsMinimized(rect.top < -300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!episodes || episodes.length === 0) return null;

  const renderPlayer = () => {
    if (youtubeEmbedUrl) {
      return (
        <iframe
          src={youtubeEmbedUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    return <VideoPlayer src={episodes[currentEpisode].link_m3u8} />;
  };

  const items = [
    {
      key: "player",
      label: youtubeEmbedUrl ? "Trailer" : "Xem Phim",
      children: (
        <div ref={playerRef}>
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
            {renderPlayer()}
          </div>

          {episodes.length > 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Chọn Tập</h3>
              <div className="flex flex-wrap-reverse gap-1.5">
                {episodes.map((ep, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentEpisode(idx)}
                    className={`px-3 w-10 py-2 rounded text-sm text-center! font-medium transition cursor-pointer hover:bg-green-500 ${
                      idx === currentEpisode
                        ? "bg-[#49d26d] text-white"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    {ep.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <Tabs items={items} className="mb-8" />

      {isMinimized && !miniClosed && (
        <div className="fixed bottom-4 right-0 z-50 w-80 bg-black rounded-lg shadow-2xl overflow-hidden">
          <div className="relative">
            <button
              onClick={() => setMiniClosed(true)}
              className="absolute top-2 right-2 z-10 w-8 h-8 cursor-pointer bg-black/50 hover:bg-green-500 rounded-full flex items-center justify-center transition"
            >
              <CloseOutlined className="text-white" />
            </button>
            <div className="aspect-video">{renderPlayer()}</div>
          </div>
        </div>
      )}
    </>
  );
}
