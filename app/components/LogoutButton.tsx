"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <Button
      className="bg-lime-300 hover:bg-indigo-300 text-black border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] absolute lg:top-[100px] lg:right-3 top-20 right-2"
      onClick={() => {
        signOut({
          callbackUrl: `${window.location.origin}/auth`,
        });
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
