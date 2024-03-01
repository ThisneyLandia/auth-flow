import React from "react";

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
import { SignUpForm } from "@/contents/auth";
import { ROUTES } from "@/routes/paths";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up to your account",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
          <CardDescription>
            By signing up, you agree to our{" "}
            <Link href={ROUTES.external.termsOfService}>Terms of Service</Link>&nbsp;and&nbsp;
            <Link href={ROUTES.external.privacyPolicy}>Privacy Policy</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>

        <CardFooter className="flex-col">
          <Typography variant="small">Already have an account? </Typography>
          <Link className="inline-block text-sm underline" href={ROUTES.public.signIn}>
            Sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
