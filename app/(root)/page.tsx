import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

async function Home() {
  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-16 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg dark:bg-gradient-to-r dark:from-blue-900 dark:to-indigo-900 dark:text-gray-100">
        <div className="flex flex-col gap-6 max-w-lg text-center md:text-left">
          <h2 className="text-3xl font-bold">
            Get Interview-Ready with AI-Powered Practice & Feedback
          </h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback to sharpen your skills.
          </p>

          <Button asChild className="btn-primary max-sm:w-full mt-4">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="hidden md:block rounded-lg shadow-lg"
        />
      </section>

      <section className="mt-12 px-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Your Interviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <div className="text-center text-gray-600 dark:text-gray-400">You haven't taken any interviews yet.</div>
          )}
        </div>
      </section>

      <section className="mt-12 px-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Take Interviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <div className="text-center text-gray-600 dark:text-gray-400">There are no interviews available at the moment.</div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
