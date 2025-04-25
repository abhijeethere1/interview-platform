import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

import { SparklesPreview } from "@/components/SparklesPreview";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";

async function Home() {
  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const sortedUserInterviews = userInterviews?.sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const sortedAllInterviews = allInterview?.sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const limitedUserInterviews = sortedUserInterviews?.slice(0, 6);
  const limitedAllInterviews = sortedAllInterviews?.slice(0, 6);

  const hasPastInterviews = limitedUserInterviews?.length! > 0;
  const hasUpcomingInterviews = limitedAllInterviews?.length! > 0;

  return (
    <>
    <div className="w-full flex items-center justify-center px-6 py-4 shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <SparklesPreview />
      </Link>
    </div>


    <main className="px-4 md:px-12 py-10 max-w-screen-xl mx-auto space-y-20">


      <section>
        <GoogleGeminiEffectDemo/>
      </section> 

      {/* Your Interviews */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Your Interviews
        </h2>
        {hasPastInterviews ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {limitedUserInterviews?.map((interview) => (
              <InterviewCard
              key={interview.id}
              userId={user?.id}
              interviewId={interview.id}
              role={interview.role}
              type={interview.type}
              techstack={interview.techstack}
              createdAt={interview.createdAt}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            You haven't taken any interviews yet.
          </div>
        )}
      </section>

      {/* Upcoming Interviews */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Take Interviews
        </h2>
        {hasUpcomingInterviews ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {limitedAllInterviews?.map((interview) => (
              <InterviewCard
              key={interview.id}
              userId={user?.id}
              interviewId={interview.id}
              role={interview.role}
              type={interview.type}
              techstack={interview.techstack}
              createdAt={interview.createdAt}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            There are no interviews available at the moment.
          </div>
        )}
      </section>

      {/* View All Interviews Button */}
      <div className="flex justify-center">
        <Button asChild className="bg-blue-800 hover:bg-blue-500 text-white px-6 py-3 text-lg rounded-xl shadow-md">
          <Link href="/allinterviews">View All Interviews</Link>
        </Button>
      </div>
    </main>
        </>
  );
}

export default Home;
