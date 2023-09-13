"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Cheveron } from "@/assets";
export function NavHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div className="mt-6 flex items-center py-3 lg:px-7 ]">
      <button
        className="text-prefferredBlack cursor-pointer text-sm"
        onClick={() => router.push("/")}
      >
        Home
      </button>

      {pathSegments.map((segment, index) => (
        <React.Fragment key={segment}>
          <Image
            src={Cheveron}
            alt="left"
            className="w-[14px] h-[14px] object-contain mx-3 text-white text-3xl"
            priority={true}
          />
          <span className="text-sm text-preferredBlack capitalize font-semibold">
            {segment}
          </span>
          {index < pathSegments.length - 1 && (
            <span className="mx-1 text-sm text-preferredBlack"> &gt; </span>
          )}
        </React.Fragment>
      ))}
      {/* <h3 className="text-sm text-prefferredBlack  capitalize font-semibold">
        {pathname.substring(1)}
      </h3> */}
    </div>
  );
}
