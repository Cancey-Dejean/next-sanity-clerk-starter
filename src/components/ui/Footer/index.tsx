import Container from "@/components/ui/container";

export default function Footer({ footer }: any) {
  const { title } = footer;
  console.log(footer);
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <Container className="flex flex-col items-center justify-between py-28 lg:flex-row">
        <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:pr-4 lg:text-left lg:text-5xl">
          {title}
        </h3>
        <div className="l flex flex-col items-center justify-center gap-3 lg:flex-row lg:pl-4">
          <a
            href="https://github.com/sanity-io/sanity-template-nextjs-clean"
            className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-colors duration-200 hover:bg-red-500 focus:bg-cyan-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a href="https://nextjs.org/docs" className="mx-3 hover:underline">
            Read Next.js Documentation
          </a>
        </div>
      </Container>
    </footer>
  );
}
