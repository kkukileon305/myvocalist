"use client";

import { useEffect } from "react";

const LoadStyle = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/grammar.css"; // 퍼블릭 경로
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // 페이지 이동 시 제거
    };
  }, []);

  return <></>;
};

export default LoadStyle;
