import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface CardProps {
  title: string;
  desc: string;
  buttonName: string;
  linkName: string;
  foot: string;
}

export const CardComponent = ({
  title,
  desc,
  buttonName,
  linkName,
  foot,
}: CardProps) => {
  return (
    <div className="lg:w-auto w-[70%] flex justify-center items-center text-center lg:mx-20 my-7">
      <Card className="p-5 border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] bg-gradient-to-b from-lime-200 to-lime-400 rounded-none">
        <CardTitle className="lg:text-3xl font-berkshire tracking-wide">
          {title}
        </CardTitle>
        <CardDescription className="my-3 text-black">{desc}</CardDescription>
        <CardContent>
          <Link href={linkName}>
            <Button className="border-2 border-lime-400 hover:bg-indigo-900 hover:text-lime-300 bg-indigo-400 text-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
              {buttonName}
            </Button>
          </Link>
        </CardContent>
        <CardFooter className="text-sm font-semibold w-[100%] text-center">{foot}</CardFooter>
      </Card>
    </div>
  );
};
