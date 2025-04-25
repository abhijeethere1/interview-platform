import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { logout } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="min-h-screen flex flex-col items-center justify-between scrollbar-hide">
      {/* Navbar */}
      <nav className="w-3/4 flex items-center justify-between px-6 py-4 m-5 rounded-2xl bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
            <Image src="/logo2.png" alt="logo" width={40} height={40} className="rounded-full" />
            <span>SmartHire-AI</span>
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex gap-8 flex-1 justify-center">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition font-medium cursor-pointer">
            Home
          </Link>
          <Link href="/allinterviews" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition font-medium cursor-pointer">
            All Interviews
          </Link>
          <Link href="/interview" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition font-medium cursor-pointer">
            Make Interview
          </Link>
        </div>

        {/* Right: Logout */}
        <div className="flex items-center gap-4">
          <Button onClick={logout} variant="outline" className="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
            Logout
          </Button>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;