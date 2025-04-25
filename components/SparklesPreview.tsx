"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[45rem] w-full flex flex-col items-center justify-center border-0 overflow-hidden rounded-full">
        <img src="/logo2.png" alt="robot logo" width={200} height={160} className="transform scale-110" />
          
      <h1 className="md:text-6xl text-4xl lg:text-9xl font-bold text-center text-white relative z-20">
        SmartHire-AI
      </h1>
      <div className="w-full h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full border-0 rounded-3xl [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
