"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState<null | string>(null);

  async function signInWithEmail() {
    const signInRes = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signInRes?.ok) {
      return toast({
        title: "Error!",
        description: "Something went wrong please try again...",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check spam in your email",
      description: "A magic link has been sent to you"
    });
  }

  return (
    <form action={signInWithEmail}>
      <div className="flex flex-col gap-y-2">
        <Input
          type="email"
          name="email"
          placeholder="mail@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button className="mt-6 mb-3 w-auto shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-[1px] border-black bg-lime-300 text-black hover:text-white">
        Login With Email
      </Button>
    </form>
  );
};
export default SignInForm;
