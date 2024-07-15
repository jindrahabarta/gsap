"use client";
import { ReactLenis } from "lenis/react";

function LenisScroll({ children }: any) {
  return <ReactLenis root>{children}</ReactLenis>;
}
export default LenisScroll;
