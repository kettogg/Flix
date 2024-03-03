import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MixIcon } from "@radix-ui/react-icons";

export function Nav() {
  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <MixIcon className="h-5 w-5" />
        <span className="pt-0.5 font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  );
}
