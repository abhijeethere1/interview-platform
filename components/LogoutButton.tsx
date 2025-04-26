"use client";

import { logout } from "@/lib/actions/auth.action";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      const result = await logout();
      if (result.success) {
        router.push("/sign-in"); // after logout, move to sign-in
      } else {
        console.error(result.message);
      }
    });
  };
  const Spinner = () => {
    return (
      <div className="w-5 h-5 border-l-2 border-r-2 border-t-2 border-black dark:border-white border-t-transparent rounded-full animate-spin" />
    );
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      disabled={isPending}
      className="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-center"
    >
      {isPending ? (
        <Spinner /> 
      ) : (
        "Logout"
      )}
    </Button>
  );
};

export default LogoutButton;
