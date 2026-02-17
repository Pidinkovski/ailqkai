"use client";

import { useState, useRef } from "react";

export default function PhoneVideoFrame() {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    videoRef.current?.pause();
  };

  return (
    <>
      <div className="relative">
        {/* Phone frame - larger size */}
        <div className="w-[320px] sm:w-[360px] h-[640px] sm:h-[720px] bg-gray-900 rounded-[3.5rem] p-3 shadow-2xl border-4 border-gray-800">
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-gray-900 rounded-b-2xl z-10" />
          {/* Phone screen */}
          <div className="relative w-full h-full bg-black rounded-[2.75rem] overflow-hidden flex items-center justify-center">
            <video
              ref={videoRef}
              controls
              playsInline
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
              preload="metadata"
            >
              <source src="/0217.m4v" type="video/mp4" />
            </video>
            {/* Expand overlay button */}
            <button
              onClick={handleExpand}
              className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-black/60 hover:bg-black/80 text-white transition-all opacity-70 hover:opacity-100 focus:opacity-100 focus:outline-none"
              aria-label="Разгъни видео"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1v4m0-4h4m-4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>
        {/* Decorative glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-[4.5rem] blur-2xl -z-10" />
      </div>

      {/* Expand modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-4xl aspect-[9/16] max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src="/0217.m4v"
              controls
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full object-contain"
            />
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all"
              aria-label="Затвори"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
