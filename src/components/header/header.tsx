import { Fragment } from "react";

import { getServerSession } from "next-auth";

import { ROUTES } from "@/routes/paths";

import { Link } from "../links";
import { buttonVariants } from "../ui/button";

import { LogoutButton } from "./logout-button";

export const Header = async () => {
  const session = await getServerSession();

  return (
    <header className="sticky top-0 flex h-20 items-center border-b border-b-border bg-transparent px-4 backdrop-blur-md xl:px-0">
      <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between">
        <span>AuthFlow</span>

        <ul className="flex items-center space-x-4">
          <li>
            <Link href={ROUTES.public.home} className="!text-inherit no-underline">
              Home
            </Link>
          </li>
          <li>About</li>
          <li>Contact</li>
          {session?.user ? (
            <Fragment>
              <li>
                <Link
                  href={ROUTES.private.dashboard}
                  className={buttonVariants({ variant: "secondary", className: "!no-underline" })}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <LogoutButton />
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <Link
                  href={ROUTES.public.signUp}
                  className={buttonVariants({ variant: "secondary", className: "!no-underline" })}
                >
                  Sign up
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.public.signIn}
                  className={buttonVariants({ variant: "default", className: "!no-underline" })}
                >
                  Sign in
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </header>
  );
};
