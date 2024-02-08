'use client';

import { getImageProps } from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ');
      return `url("${url}") ${dpi}`;
    })
    .join(', ');
  return `image-set(${imageSet})`;
}

export default function Machine() {
  const {
    props: { srcSet },
  } = getImageProps({ alt: 'Play', width: 264, height: 117, src: '/assets/play.png' });
  const backgroundImage = getBackgroundImage(srcSet);
  const videRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videRef.current;

    if (!video) {
      return;
    }

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const play = useCallback(() => {
    const video = videRef.current;

    if (!video) {
      return;
    }

    // Add your logic here

    video.play().catch(console.error);
  }, []);

  return (
    <div className="relative inline-flex aspect-[1573/960] w-full">
      <video ref={videRef} src="/assets/machine.mp4" className="h-full w-full object-cover" />
      <button
        aria-label="Play"
        className={`w- absolute left-[43.293071%] top-[46.979167%] aspect-[264/117] w-[16.719644%] bg-cover bg-center bg-no-repeat transition-all duration-75 ease-in-out active:scale-95 ${isPlaying ? 'scale-95 grayscale' : ''}`}
        style={{ backgroundImage } as React.CSSProperties}
        onClick={play}
        disabled={isPlaying}
      />
    </div>
  );
}
