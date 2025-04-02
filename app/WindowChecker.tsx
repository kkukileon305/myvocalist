"use client";

import { useEffect, useState, ReactNode } from "react";

interface WindowCheckerProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function WindowChecker({ children, fallback = null }: WindowCheckerProps) {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    setHasWindow(typeof window !== "undefined");
  }, []);

  return <>{hasWindow ? children : fallback}</>;
}
