import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";

import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

interface RouteParams {
  params: {
    id: string;
  };
}

const Feedback = async ({ params }: RouteParams) => {
  const { id } = params;
  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <div className="relative w-screen h-screen min-h-screen overflow-x-hidden text-white">
      {/* Fullscreen Background */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 overflow-y-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Feedback on the{" "}
          <span className="capitalize">{interview.role}</span> Interview
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-base">
          {/* Overall Impression */}
          <div className="flex items-center gap-2">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <span>
              Overall Impression:{" "}
              <span className="text-green-400 font-bold">
                {feedback?.totalScore}
              </span>
              /100
            </span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2">
            <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
            <span>
              {feedback?.createdAt
                ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                : "N/A"}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full mb-10">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${(feedback?.totalScore || 0)}%` }}
          />
        </div>

        {/* Final Assessment */}
        <p className="text-lg mb-10 text-neutral-200">
          {feedback?.finalAssessment}
        </p>

        {/* Interview Breakdown */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary-200">
            Breakdown of the Interview:
          </h2>
          <div className="space-y-4">
            {feedback?.categoryScores?.map((category, index) => (
              <div
                key={index}
                className="bg-neutral-800 border border-neutral-700 p-4 rounded-lg shadow"
              >
                <p className="font-bold text-lg">
                  {index + 1}. {category.name} ({category.score}/100)
                </p>
                <p className="text-neutral-400">{category.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            Strengths
          </h3>
          <ul className="list-disc list-inside text-neutral-300">
            {feedback?.strengths?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Areas for Improvement */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-red-400 mb-2">
            Areas for Improvement
          </h3>
          <ul className="list-disc list-inside text-neutral-300">
            {feedback?.areasForImprovement?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full  mx-auto mt-16">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-300 text-center md:text-left">
              Not satisfied with your performance? You can retake the interview or return to the dashboard.
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Link
                href="/"
                className="flex-1 md:flex-none text-center px-5 py-2.5 rounded-lg border border-gray-600 bg-gray-800 hover:bg-gray-700 text-sm text-white transition-all"
              >
                ← Back to Dashboard
              </Link>
              <Link
                href={`/interview/${id}`}
                className="flex-1 md:flex-none text-center px-5 py-2.5 rounded-lg border border-blue-500 bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white transition-all"
              >
                Retake Interview
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feedback;
