import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { Github, InstagramIcon, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="lg:my-16 my-10 font-unbounded lg:text-[4rem] uppercase font-semibold text-4xl">
        Contacts
      </h1>
      <Card className="lg:p-7 p-8 border-2 border-black bg-gradient-to-bl from-fuchsia-800 to-fuchsia-100">
        <CardTitle className="text-center font-berkshire tracking-wider">
          Links:
        </CardTitle>
        <div className="flex flex-row my-8 lg:my-7">
          <CardContent className="font-unbounded">
            <Link href="https://github.com/trevorRoZierr/" className="p-0">
              <Github />
              <span className="text-center">Github</span>
            </Link>
            <Link href="+91-7887630243" className="p-0">
              <PhoneCall />
              <span className="text-center">Phone</span>
            </Link>
            <Link
              href="https://www.instagram.com/sameoldtreva/"
              className="p-0"
            >
              <InstagramIcon />
              <span className="text-center">Instagram</span>
            </Link>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ContactPage;
