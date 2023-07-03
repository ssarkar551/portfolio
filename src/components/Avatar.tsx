'use client'
import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

const AvatarDemo = () => (
  <div className="flex gap-5">
    <Avatar.Root className=" inline-flex h-[300px] w-[300px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://github.com/ssarkar551/portfolio/blob/master/public/DSC_0740.jpg?raw=true"
        alt="SS"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white dark:bg-gray-800 text-[15px] font-medium"
        delayMs={600}
      >
        SS
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default AvatarDemo;
