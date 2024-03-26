import prisma from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const nonveg = await prisma.nonVeganMenu.findMany();

  return NextResponse.json(nonveg);
}
