import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface ContentOptionsProps {
  name: string;
  link: string;
  buttonName: string;
}

const AccessedReserve = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center">
      <h1 className="m-8 lg:m-12 font-unbounded lg:text-xl text-lg font-medium">
        Congrats! your table has been reserved successfully...
      </h1>
      <Card className="lg:p-8 p-6 border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] bg-amber-100">
        <CardTitle className="font-berkshire tracking-wider">
          Reservation Menu
        </CardTitle>
        <CardDescription className="my-3 text-black">
          You can check reservation details below
        </CardDescription>

        <CardContent>
          <ContentOptions
            name="Pay for reservation:"
            link="/reservations/payment"
            buttonName="Payment"
          />
          <ContentOptions
            name="Details of reservation:"
            link="/reservations/details"
            buttonName="Check"
          />
          <ContentOptions
            name="Full menu reservation:"
            link="/reservations/menu"
            buttonName="Menu"
          />
        </CardContent>
        <div className="flex justify-center items-center text-center">
          <CardFooter>
            <Link href="/reservations" className="underline font-semibold">
              Go back to reservations
            </Link>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

const ContentOptions = ({ name, link, buttonName }: ContentOptionsProps) => {
  return (
    <div className="flex justify-between items-center flex-row mt-6">
      <h1 className="font-medium">{name}</h1>
      <Link href={link}>
        <Button className="ml-3 border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] bg-green-500 hover:bg-fuchsia-400 text-black">
          {buttonName}
        </Button>
      </Link>
    </div>
  );
};

export default AccessedReserve;
