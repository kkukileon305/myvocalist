"use client";

import { useEffect, useState } from "react";

const LoadStyle = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/grammar.css";

    link.onload = () => {
      setIsLoading(false);
    };
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  if (!isLoading) {
    return <></>;
  }

  return (
    <div className="fixed left-0 top-0 bg-white/50 backdrop-blur-sm w-full h-full flex justify-center items-center z-10">
      <p className="text-2xl">載入中...</p>
    </div>
  );
};

export default LoadStyle;
