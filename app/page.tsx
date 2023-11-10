"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import MainPage from "./pages/mainPage";
import LoadingPage from "./pages/loadingPage";
import DasomPage from "./pages/dasomPage";
import NavBar from "./src/navBar";
import DonggiPage from "./pages/donggiPage";
import JeongeunPage from "./pages/\bjeongeunPage";
import { useProgress } from "@react-three/drei";
import SelimPage from "./pages/selimPage";

export default function Home() {
  const { loaded } = useProgress();

  const [loading, setLoading] = useState(true);
  const [visibleDiv, setVisibleDiv] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mouseDownY, setMouseDownY] = useState<number | null>(null);
  const [dragDistance, setDragDistance] = useState(0);

  // mouse Click event
  const handleClickDown = () => {
    if (isScrolling) return;
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);

    if (visibleDiv === 0) setVisibleDiv(1);
    else if (visibleDiv === 1) setVisibleDiv(2);
    else if (visibleDiv === 2) setVisibleDiv(3);
    else if (visibleDiv === 3) setVisibleDiv(4);
    else if (visibleDiv === 4) setVisibleDiv(0);
  };

  const handleClickUp = () => {
    if (visibleDiv === 4) setVisibleDiv(3);
    else if (visibleDiv === 3) setVisibleDiv(2);
    else if (visibleDiv === 2) setVisibleDiv(1);
    else if (visibleDiv === 1) setVisibleDiv(0);
  };

  // wheel Event
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);

    if (event.deltaY > 0) {
      if (visibleDiv === 0) setVisibleDiv(1);
      else if (visibleDiv === 1) setVisibleDiv(2);
      else if (visibleDiv === 2) setVisibleDiv(3);
      else if (visibleDiv === 3) setVisibleDiv(4);
      else if (visibleDiv === 4) setVisibleDiv(0);
    } else {
      if (visibleDiv === 1) setVisibleDiv(0);
      else if (visibleDiv === 2) setVisibleDiv(1);
      else if (visibleDiv === 3) setVisibleDiv(2);
      else if (visibleDiv === 4) setVisibleDiv(3);
    }
  };

  useEffect(() => {
    const wheelListener = (event: WheelEvent) => {
      handleWheel(event as any);
    };
    window.addEventListener("wheel", wheelListener, { passive: false });

    return () => {
      window.removeEventListener("wheel", wheelListener);
    };
  }, [handleWheel]);

  // drag n drop Event (desktop / mobile)

  const handleMouseDown = (event: React.MouseEvent) => {
    setMouseDownY(event.clientY);
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    handleDrag(event.clientY);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    setMouseDownY(event.touches[0].clientY);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (event.changedTouches.length > 0) {
      handleDrag(event.changedTouches[0].clientY);
    }
  };

  const handleDrag = (endY: number) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);
    if (mouseDownY === null) return;
    const deltaY = endY - mouseDownY;
    setMouseDownY(null);

    if (Math.abs(deltaY) < 50) return; // threshold for minimal drag distance

    if (deltaY > 0) {
      if (visibleDiv === 1) setVisibleDiv(0);
      else if (visibleDiv === 2) setVisibleDiv(1);
      else if (visibleDiv === 3) setVisibleDiv(2);
      else if (visibleDiv === 4) setVisibleDiv(3);
    } else {
      if (visibleDiv === 0) setVisibleDiv(1);
      else if (visibleDiv === 1) setVisibleDiv(2);
      else if (visibleDiv === 2) setVisibleDiv(3);
      else if (visibleDiv === 3) setVisibleDiv(4);
      else if (visibleDiv === 4) setVisibleDiv(0);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (mouseDownY === null) return;
    const deltaY = event.clientY - mouseDownY;
    setDragDistance(deltaY);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (mouseDownY === null) return;
    const deltaY = event.touches[0].clientY - mouseDownY;
    setDragDistance(deltaY);
  };

  useEffect(() => {
    if (mouseDownY === null) {
      setDragDistance(0);
    }
  }, [mouseDownY]);

  const transition = {
    type: "tween",
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <main className="bg-black">
      <LoadingPage />
      <div
        className="relative w-screen h-screen overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onWheel={handleWheel}
      >
        <AnimatePresence>
          <motion.div
            key="0"
            className="w-full h-screen  flex justify-center items-center absolute top-0 left-0"
            initial={{ y: "0%" }}
            animate={{
              y: visibleDiv === 0 ? "0%" : visibleDiv > 0 ? "-100%" : "-100%",
            }}
            transition={transition}
          >
            <MainPage />
          </motion.div>

          {loaded >= 7 ? (
            <>
              <motion.div
                key="1"
                className="w-full h-screen  flex justify-center items-center absolute top-0 left-0 "
                initial={{ y: "100%" }}
                animate={{
                  y:
                    visibleDiv === 1 ? "0%" : visibleDiv > 1 ? "-100%" : "100%",
                }}
                transition={transition}
              >
                <DasomPage />
              </motion.div>
              <motion.div
                key="2"
                className="w-full h-screen  flex justify-center items-center absolute top-0 left-0 "
                initial={{ y: "100%" }}
                animate={{
                  y:
                    visibleDiv === 2 ? "0%" : visibleDiv > 2 ? "-100%" : "100%",
                }}
                transition={transition}
              >
                <DonggiPage />
              </motion.div>
              <motion.div
                key="3"
                className="w-full h-screen  flex justify-center items-center absolute top-0 left-0 "
                initial={{ y: "100%" }}
                animate={{
                  y:
                    visibleDiv === 3 ? "0%" : visibleDiv > 3 ? "-100%" : "100%",
                }}
                transition={transition}
              >
                <JeongeunPage />
              </motion.div>
              <motion.div
                key="4"
                className="w-full h-screen  flex justify-center items-center absolute top-0 left-0 "
                initial={{ y: "100%" }}
                animate={{
                  y:
                    visibleDiv === 4 ? "0%" : visibleDiv > 4 ? "-100%" : "100%",
                }}
                transition={transition}
              >
                <SelimPage />
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </div>

      {loaded >= 7 ? (
        <>
          <div className="absolute bottom-8 w-screen flex justify-center z-30">
            <button onClick={handleClickDown}>
              {visibleDiv === 4 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  stroke-width="1.5"
                  stroke="white"
                  className="w-10 h-10 block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  strokeWidth="2"
                  stroke="white"
                  className="w-10 h-10 block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <NavBar />
        </>
      ) : null}
    </main>
  );
}
