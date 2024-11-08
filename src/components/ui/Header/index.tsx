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
import { Buttons, HeaderProps } from "@/types";

export default async function Header({ header }: { header: HeaderProps }) {
  const { primaryMenu, showAuth, cta } = header;

  return (
    <header className="sticky top-0 z-50">
      <Container className="flex items-center justify-between gap-4 py-6">
        <Link className="flex items-center gap-2" href="/">
          <Logo />
          <span className="sr-only">Sanity + NextJS</span>
        </Link>

        {primaryMenu && primaryMenu.length > 0 ? (
          <div className="absolute left-1/2 -translate-x-1/2">
            <NavMenu primaryMenu={primaryMenu} />
          </div>
        ) : (
          <p>Add &quot;Primary Menu&quot; items in CMS</p>
        )}

        <div className="flex items-center gap-4">
          {showAuth ? (
            <>
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
            </>
          ) : (
            <>
              {cta && cta.length > 0 ? (
                <div className="flex items-center gap-4">
                  {cta.map(({ label, url, variant }: Buttons) => (
                    <Button key={label} asChild variant={variant}>
                      <Link href={url}>{label}</Link>
                    </Button>
                  ))}
                </div>
              ) : (
                <p>
                  Add <strong>&quot;Call to Action&quot;</strong> or set
                  <strong>&quot;Show Auth&quot;</strong> to true
                </p>
              )}
            </>
          )}
        </div>
      </Container>
    </header>
  );
}
