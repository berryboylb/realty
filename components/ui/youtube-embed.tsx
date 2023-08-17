import React from "react";
import Image from "next/image";
import { Bed, Shower, Size, Plus } from "@/assets";

const YouTubeEmbed = ({
  videoId,
  handleVideoToggle,
}: {
  videoId: string;
  handleVideoToggle: () => void
}) => {
  return (
    <div className="aspect-w-16 aspect-h-9 bg-gray-500 bg-opacity-50  fixed top-0 bottom-0 right-0 left-0 z-[9999] flex justify-center items-center">
      <button
        className="absolute top-2 right-2 z-10 px-2 py-1  text-white rounded-md -rotate-45"
        onClick={handleVideoToggle}
      >
        <Image
          src={Plus}
          alt={Plus.toString()}
          className="w-[30px] h-[30px] "
        />
      </button>
      <iframe
        className="w-[80%] h-[80%] rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
