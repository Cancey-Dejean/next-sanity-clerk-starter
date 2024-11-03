import Container from "@/components/ui/container";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex h-dvh items-center justify-center">
      <Container className="flex items-center justify-center">
        <SignUp />
      </Container>
    </section>
  );
}
