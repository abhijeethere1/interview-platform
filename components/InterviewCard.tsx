// components/InterviewCard.tsx


import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import DisplayTechIcons from "./DisplayTechIcons";

import { cn, getRandomInterviewCover } from "@/lib/utils";
import { getFeedbackByInterviewId } from "@/lib/actions/general.action";

const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback =
    userId && interviewId
      ? await getFeedbackByInterviewId({
          interviewId,
          userId,
        })
      : null;

  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  const badgeColor = {
    Behavioral: "bg-green-700 text-green-200",
    Mixed: "bg-yellow-700 text-yellow-200",
    Technical: "bg-blue-700 text-blue-200",
  }[normalizedType] || "bg-gray-700 text-gray-200";

  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <div className="w-[360px] max-sm:w-full min-h-96 rounded-3xl bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111] shadow-2xl border border-gray-700 hover:scale-[1.025] transition-all duration-300 relative overflow-hidden group">
      
      {/* Accent glow on hover */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl bg-gradient-to-br from-indigo-500/30 via-blue-400/20 to-transparent" />

      <div className="p-6 flex flex-col justify-between h-full gap-6 relative z-10">

        <div
          className={cn(
            "absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-md",
            badgeColor
          )}
        >
          {normalizedType}
        </div>

        {/* Cover Image */}
        <div className="flex justify-center">
          <Image
            src={getRandomInterviewCover()}
            alt="cover-image"
            width={80}
            height={80}
            className="rounded-full object-cover border-4 border-gray-800 shadow-lg"
          />
        </div>

        {/* Role Title */}
        <h3 className="text-center mt-2 text-xl font-semibold capitalize text-white">
          {role} Interview
        </h3>

        {/* Date & Score */}
        <div className="flex flex-row justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Image src="/calendar.svg" width={20} height={20} alt="calendar" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/star.svg" width={20} height={20} alt="star" />
            <span>{feedback?.totalScore || "---"}/100</span>
          </div>
        </div>

        {/* Assessment Summary */}
        <p className="text-center text-gray-400 text-sm italic">
          {feedback?.finalAssessment ||
            "You haven't taken this interview yet. Take it now to improve your skills."}
        </p>

        {/* Tech + Button */}
        <div className="flex justify-between items-center mt-4">
          <DisplayTechIcons techStack={techstack} />
          <Button className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 text-sm rounded-xl shadow-md">
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
