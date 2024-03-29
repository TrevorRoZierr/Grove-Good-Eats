import prisma from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  const { name, email, date } = res;
  console.log({ res });

  const result = await prisma.reservations.create({
    data: {
      name,
      email,
      date,
    },
  });

  return NextResponse.json({ result });
}

export async function GET(request: NextRequest) {
  const reserve = await prisma.reservations.findMany();
  return NextResponse.json({ reserve });
}
