import Container from "@/components/ui/container";
import { SignIn } from "@clerk/nextjs";

export default async function Page({
  searchParams,
}: {
  searchParams: { redirectUrl: string | undefined };
}) {
  const { redirectUrl } = await searchParams;
  return (
    <section className="flex h-dvh items-center justify-center">
      <Container className="flex items-center justify-center">
        <SignIn fallbackRedirectUrl={redirectUrl || "/"} />
      </Container>
    </section>
  );
}
