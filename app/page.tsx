import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import SigninBody from "./components/(signinbody)/SigninBody";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <section>
      <h1 className="text-center uppercase lg:mt-8 mt-20 mb-10 lg:mb-8 lg:text-[6rem] text-[3.2rem] font-unbounded font-semibold tracking-wider">
        Grove
      </h1>
      {session ? (
        <div>
          <SigninBody />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Card className="lg:p-10 p-8 text-center shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black bg-indigo-300 lg:w-auto w-[80%]">
            <CardTitle>Please login to surf our Restaurant</CardTitle>
            <CardContent>
              <div className="flex justify-center items-center flex-col">
                <h1 className="lg:my-5 my-3">
                  Click below to get authenticated
                </h1>
                <Link href="/auth">
                  <Button className="shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] border-2 border-black bg-lime-300 hover:bg-red-300 text-black">
                    Redirect
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
}
