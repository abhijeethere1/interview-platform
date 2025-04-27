import Image from "next/image";
import { redirect } from "next/navigation";

import Agent from "@/components/Agent";
import { getRandomInterviewCover } from "@/lib/utils";
import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

// Define the type for the params
interface RouteParams {
  id: string;
}

const InterviewDetails = async ({ params }: { params: RouteParams }) => {
  const { id } = params;

  const user = await getCurrentUser();
  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <div className="relative w-screen min-h-screen">
      {/* Fullscreen Background */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 sm:py-16">
        {/* Interview Header */}
        <div className="shadow-xl border-2 rounded-3xl p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div className="flex items-center gap-6">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={100}
              height={100}
              className="rounded-full object-cover shadow-lg"
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white capitalize">
                {interview.role} Interview
              </h1>
              <DisplayTechIcons techStack={interview.techstack} />
            </div>
          </div>

          <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium px-6 py-3 rounded-full">
            {interview.type}
          </div>
        </div>

        {/* Interview Agent Section */}
        <div>
          <Agent
            userName={user?.name!}
            userId={user?.id}
            interviewId={id}
            type="interview"
            questions={interview.questions}
            feedbackId={feedback?.id}
          />
        </div>
      </div>
    </div>
  );
};

export default InterviewDetails;
