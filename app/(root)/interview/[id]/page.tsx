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

const InterviewDetails = async ({ params }: RouteParams) => {
  const { id } = params;

  const user = await getCurrentUser();
  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      {/* Interview Header */}
      <div className="bg-white dark:bg-[#1e293b] shadow-lg rounded-2xl p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex items-center gap-4">
          <Image
            src={getRandomInterviewCover()}
            alt="cover-image"
            width={60}
            height={60}
            className="rounded-full object-cover shadow-md"
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white capitalize">
              {interview.role} Interview
            </h1>
            <DisplayTechIcons techStack={interview.techstack} />
          </div>
        </div>

        <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
          {interview.type}
        </div>
      </div>

      {/* Interview Agent */}
      <div className="bg-white dark:bg-[#0f172a] shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
        <Agent
          userName={user?.name!}
          userId={user?.id}
          interviewId={id}
          type="interview"
          questions={interview.questions}
          feedbackId={feedback?.id}
        />
      </div>
    </section>
  );
};

export default InterviewDetails;
