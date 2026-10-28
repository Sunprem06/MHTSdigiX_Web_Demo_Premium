"use client";

import { useEffect, useState } from "react";

type Support = "checking" | "supported" | "unsupported";

/** Cheap, synchronous-ish WebGL capability probe, without pulling in three.js. */
function probeWebgl(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}

/** Detects WebGL availability so heavy 3D scenes always have a safe fallback. */
export function useWebglSupport(): Support {
  const [support, setSupport] = useState<Support>("checking");

  useEffect(() => {
    setSupport(probeWebgl() ? "supported" : "unsupported");
  }, []);

  return support;
}
