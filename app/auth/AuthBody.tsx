import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SignInWithGithub from "./SignInWithGithub";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignInForm from "./SignInForm";

const AuthBody = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  return (
    <div className="flex justify-center items-center mt-10 lg:mt-16 text-center">
      <Card className="shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-[1px] border-black bg-red-300">
        <CardHeader>
          <CardTitle className="font-medium text-lg lg:text-xl capitalize">
            Welcome to grove st.
          </CardTitle>
          <CardDescription className="lg:text-sm text-xs text-black">
            Sign in is required to use this web-app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInWithGithub />
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthBody;
