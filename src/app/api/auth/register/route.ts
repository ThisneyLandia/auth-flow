import { type NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const { fullname, email, password } = body;

  const user = await db.user.findUnique({
    where: { email },
  });

  if (user) return NextResponse.json({ message: "User already exists" }, { status: 400 });

  const newUser = await db.user.create({
    data: {
      name: fullname,
      email,
      password,
    },
  });

  return NextResponse.json({ user: newUser });
};
