"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SignInWithGithub = () => {
  return (
    <Button
      onClick={() => {
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        });
      }}
      className="m-3 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-[1px] border-black bg-indigo-300 text-black hover:text-white"
    >
      Login With Github
    </Button>
  );
};

export default SignInWithGithub;
