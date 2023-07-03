"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <NavigationMenu.Root className={clsx("regular")}>
      <NavigationMenu.List
        className={clsx(
          "text-xl",
          "px-2 pt-3 pb-1",
          "flex flex-row space-x-2 rounded-sm items-center",
          "bg-white dark:bg-neutral-900",
          "shadow-xl dark:shadow-2xl dark:shadow-neutral-800"
        )}
      >
        <NavigationMenu.Item asChild>
          <NavigationMenu.Link
            onClick={() => push("/")}
            className={clsx(
              `${
                pathname === "/"
                  ? "text-blue-700 dark:text-blue-300 font-semibold"
                  : "text-black dark:text-white"
              }`,
              "px-1 py-3 lg:px-2",
              "cursor-pointer rounded-lg",
              "hover:text-blue-700 dark:hover:text-indigo-300"
            )}
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item asChild>
          <NavigationMenu.Link
            onClick={() => push("/about")}
            className={clsx(
              `${
                pathname === "/about"
                  ? "text-indigo-700 dark:text-indigo-200"
                  : "text-black dark:text-white"
              }`,
              "px-1 py-3 lg:px-2",
              "cursor-pointer rounded-lg",
              "hover:text-blue-700 dark:hover:text-indigo-300"
            )}
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator className="NavigationMenuIndicator" />
        <div
          className={clsx(
            "absolute right-2 top-0 pt-3",
            "flex flex-row gap-4 lg:gap-6"
          )}
        >
          <div className={clsx("pt-3")}>
            <ThemeToggle/>
          </div>
        </div>
      </NavigationMenu.List>
      <div
        className={clsx(
          "absolute flex justify-center",
          "left-[-20%] top-[100%] w-[140%]"
        )}
        style={{
          perspective: "2000px",
        }}
      >
        <NavigationMenu.Viewport
          className={clsx(
            "relative mt-2 overflow-hidden rounded-md bg-white shadow-lg dark:bg-gray-800",
            "w-radix-navigation-menu-viewport",
            "h-radix-navigation-menu-viewport",
            "radix-state-open:animate-scale-in-content",
            "radix-state-closed:animate-scale-out-content",
            "origin-[top_center] transition-[width_height] duration-300 ease-[ease]"
          )}
        />
      </div>
    </NavigationMenu.Root>
  );
};
