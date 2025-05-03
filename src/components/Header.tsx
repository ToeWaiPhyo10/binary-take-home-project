"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export default function Header() {
  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-center items-center h-16">
        <ul className="flex gap-8 border border-gray-300 rounded-full py-2 px-4 backdrop-blur-lg">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "font-medium underline" : ""
              } hover:font-medium`}
              scroll={false}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/friends"
              className={`${
                pathname === "/friends" ? "font-medium underline" : ""
              } hover:font-medium`}
              scroll={false}
            >
              Friends
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link
                  href="/my-posts"
                  className={`${
                    pathname === "/my-posts" ? "font-medium underline" : ""
                  } hover:font-medium`}
                  scroll={false}
                >
                  My Posts
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    window.location.href = "/";
                  }}
                  className="hover:font-medium"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/login"
                className={`${
                  pathname === "/login" ? "font-medium underline" : ""
                } hover:font-medium`}
                scroll={false}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
