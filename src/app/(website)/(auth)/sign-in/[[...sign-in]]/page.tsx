import Container from "@/components/ui/container";
import { SignIn } from "@clerk/nextjs";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ redirectUrl?: string }>;
}) {
  const params = await searchParams;

  return (
    <section className="flex h-full items-center justify-center">
      <Container className="flex items-center justify-center">
        <SignIn forceRedirectUrl={params.redirectUrl || "/"} />
      </Container>
    </section>
  );
}
