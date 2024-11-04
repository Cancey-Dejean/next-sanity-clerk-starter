"use client";

import { useUser } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function UserSettings() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-end gap-2">
      <SignedIn>
        <span className="sr-only">{user?.firstName}</span>
        <UserButton />
      </SignedIn>
    </div>
  );
}
