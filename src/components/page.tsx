import { Suspense } from "react";
import { AllPosts } from "@/components/Posts";

export default async function Page() {
  return (
    <>
      <div className="border-gray-10 border-t">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>
              <AllPosts />
            </Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}
