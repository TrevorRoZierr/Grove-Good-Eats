"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast, useToast } from "@/components/ui/use-toast";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const [disableRes, setDisableRes] = useState(false);

  const handleSubmit = async (event: any) => {
    try {
      const parsedDate = new Date(date);

      await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, date: parsedDate }),
      });

      setName("");
      setEmail("");
      setDate("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleDateChange = (event: any) => {
    setDate(event.target.value);
  };

  const handleButton = () => {
    toast({
      description: "Your Table has been reserved :)",
    });
    setDisableRes(true);
  };

  return (
    <div
      className={
        disableRes
          ? `hidden`
          : `flex justify-center items-center mt-8 lg:mt-12 border-2 p-6 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] rounded-2xl`
      }
    >
      <form action={handleSubmit}>
        <Label>Name:* </Label>
        <Input
          type="text"
          id="name"
          value={name}
          className="border-[1px] border-black mb-3"
          onChange={handleNameChange}
          placeholder="Trevor Hendrix RoZierr"
          required
        />
        <Label>Email:* </Label>
        <Input
          type="email"
          id="email"
          value={email}
          className="border-[1px] border-black mb-3"
          onChange={handleEmailChange}
          placeholder="whatever@domain"
          required
        />
        <Label>Date & Time:* </Label>
        <Input
          type="datetime-local"
          id="date"
          value={date}
          className="border-[1px] border-black mb-3"
          onChange={handleDateChange}
          required
        />
        <div className="flex justify-center items-center text-center mt-4">
          <Button
            type="submit"
            className="border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] bg-pink-500 hover:bg-green-500 text-black border-2 rounded-xl"
            onClick={handleButton}
          >
            Book It!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
