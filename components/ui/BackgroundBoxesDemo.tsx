"use client";

import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import AuthForm from "@/components/AuthForm";

// Define the props type
interface BackgroundBoxesDemoProps {
  type: "sign-in" | "sign-up";
}

export const BackgroundBoxesDemo: React.FC<BackgroundBoxesDemoProps> = ({ type }) => {
  return (
    <div className="h-screen relative w-full flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      <Boxes />
      <AuthForm type={type} />
    </div>
  );
};
