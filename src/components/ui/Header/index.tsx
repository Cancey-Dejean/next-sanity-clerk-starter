import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/Button";
import { NavMenu } from "@/components/ui/Header/NavMenu";
import { Logo } from "@/components/ui/svgIcons";

export default async function Header() {
  return (
    <header className="sticky top-0 z-50">
      <Container className="flex items-center justify-between gap-4 py-6">
        <Link className="flex items-center gap-2" href="/">
          <Logo />
          <span className="sr-only">Sanity + NextJS</span>
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2">
          <NavMenu />
        </div>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignUpButton>
              <Button variant="outline">Sign Up</Button>
            </SignUpButton>
            <SignInButton>
              <Button>Sign In</Button>
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
