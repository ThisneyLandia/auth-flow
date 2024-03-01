import { type Metadata } from "next";

import { Link } from "@/components/links";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { SignInForm } from "@/contents/auth";
import { ROUTES } from "@/routes/paths";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>

        <CardContent>
          <SignInForm />
        </CardContent>

        <CardFooter className="flex-col">
          <Typography variant="small">Don&apos;t have an account?</Typography>
          <Link className="inline-block text-sm underline" href={ROUTES.public.signUp}>
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
