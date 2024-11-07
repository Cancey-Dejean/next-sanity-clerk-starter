import { client } from "@/sanity/lib/client";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const user = await currentUser();

  if (!user) {
    return NextResponse.redirect("/sign-up");
  }

  const { id, firstName, lastName, emailAddresses } = user;
  await client.createIfNotExists({
    _type: "user",
    _id: id,
    firstName,
    lastName,
    email: emailAddresses[0].emailAddress,
  });

  const url = req.nextUrl.searchParams.get("redirectUrl") || "/";
  return NextResponse.redirect(url);
};
