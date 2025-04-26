import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <div className="relative w-screen h-screen bg-gradient-to-tl ">
      {/* Fullscreen Background */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

    {/* Main Content */}      
    <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-20 text-white">
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-200">
        Interview Generation
      </h3>

      {/* Agent Component */}
      <div className="rounded-xl shadow-lg p-6 text-center ">
        <Agent
            userName={user?.name!}
            userId={user?.id}
            profileImage={user?.profileURL}
            type="generate"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
