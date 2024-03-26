import prisma from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const veg = await prisma.veganMenu.findMany();

  return NextResponse.json(veg);
}
