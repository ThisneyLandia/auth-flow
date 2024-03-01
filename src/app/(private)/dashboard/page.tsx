/* eslint-disable @next/next/no-img-element */
import { getServerSession } from "next-auth";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { authConfigs } from "@/lib";
export default async function Home() {
  const session = await getServerSession(authConfigs);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <pre>{JSON.stringify(session, null, 2)}</pre>

      <main className="flex flex-1 flex-col items-center justify-center px-4 xl:px-0">
        <section className="flex min-h-screen w-full max-w-screen-xl flex-wrap items-center justify-between gap-10">
          <div className="flex flex-col gap-4">
            <div className="max-w-lg">
              <Typography variant="h1">Welcome to AuthFlow template</Typography>
              <Typography variant="muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem eligendi
                iure, sint corrupti temporibus quas?
              </Typography>
            </div>

            <div className="flex items-center gap-2">
              <Button>Get started</Button>
              <Button variant="secondary">Learn more</Button>
            </div>
          </div>
          <img src="https://placehold.co/600x400" alt="hero" className="rounded-md" />
        </section>

        <section className="flex min-h-screen w-full max-w-screen-xl flex-col items-center gap-10">
          <div className="flex flex-col items-center justify-center gap-1">
            <Typography variant="h3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.
            </Typography>
            <Typography variant="muted" className="max-w-xl text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, molestias rerum et
              provident repudiandae eum esse laudantium fugit beatae pariatur? Rem, sunt atque
              provident repellendus ratione quaerat beatae dicta quasi?
            </Typography>
          </div>

          <div className="flex flex-shrink flex-wrap items-center justify-center gap-x-4 gap-y-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src="https://placehold.co/150x150" alt="icon" className="mb-4 rounded-sm" />

                <Typography variant="h4">Lorem ipsum dolor sit amet.</Typography>
                <Typography variant="muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-10 flex w-full items-center justify-between border-t border-t-border px-4 py-8">
        <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between">
          <span>© 2021 AuthFlow</span>
          <ul className="flex items-center space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
