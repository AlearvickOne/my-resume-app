"use client";

import Plyr from "plyr";
import { useEffect } from "react";
import "plyr/dist/plyr.css";

interface VideoPlayerPlyrProps {
  idDOM: string;
  src: string;
}

export function VideoPlayerPlyr({ src, idDOM }: VideoPlayerPlyrProps) {
  useEffect(() => {
    const videoPlayer = new Plyr(`#${idDOM}`);

    videoPlayer.source = {
      type: "video",
      title: "blog-org-video",
      sources: [{ src: src, type: "video/mp4", size: 720 }],
    };
  }, []);

  return <video id={idDOM} controls />;
}
