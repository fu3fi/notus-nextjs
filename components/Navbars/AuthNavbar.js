import React from "react";
import Link from "next/link";
// components

export default function Navbar(props) {
  return (
    <>
      <nav className="top-0 inset-x-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
          <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                Go как есть
              </a>
          </Link>
      </nav>
    </>
  );
}
