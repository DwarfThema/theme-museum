import React, { useState } from "react";

interface VideoBackgroundProps {
  src: string;
  onLoaded?: () => void;
}

const VideoBackGround: React.FC<VideoBackgroundProps> = ({ src, onLoaded }) => {
  return (
    <div className="fixed inset-0 z-0">
      <video
        className="absolute inset-0 w-full h-full object-cover overflow-hidden"
        src={src}
        onLoadedData={onLoaded}
        autoPlay
        muted
        loop
        playsInline
        controlsList="nodownload nofullscreen"
      />
    </div>
  );
};

export default VideoBackGround;
