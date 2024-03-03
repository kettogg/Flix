import React from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { ModeToggle } from "@/components/ModeToggle";
import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default async function Header() {
  return (
    <>
      <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <Nav />
          <div className="flex flex-1 items-center space-x-2 justify-end">
            <nav className="flex items-center">
              <Link
                href="https://github.com/re1san/Movie-Recommender"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <GitHubLogoIcon className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
