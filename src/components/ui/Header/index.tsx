import Container from "@/components/ui/container";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header({
  companyName = "Company Name",
}: {
  companyName?: string;
}) {
  return (
    <header className="sticky top-0 z-50 bg-transparent py-5">
      <Container className="flex items-center justify-between">
        <Link href="/">{companyName}</Link>
        <NavMenu />

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <Button>Sign Up</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Container>
    </header>
  );
}
