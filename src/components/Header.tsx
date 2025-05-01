"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0  z-50">
      <nav className="flex justify-center items-center h-16">
        <ul className="flex gap-8 border border-gray-300 rounded-full py-2 px-4 backdrop-blur-lg ">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "font-medium underline" : ""
              } hover:font-medium`}
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
            >
              Friends
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className={`${
                pathname === "/login" ? "font-medium underline" : ""
              } hover:font-medium`}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
