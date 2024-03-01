import { type Metadata } from "next";

import { Link } from "@/components/links";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { ROUTES } from "@/routes/paths";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot your password? No worries, we got you covered!",
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Forgot password</CardTitle>
          <CardDescription>Enter your email to reset your password</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>

          <div className="flex flex-col space-y-4">
            <Button className="w-full" type="submit">
              Submit
            </Button>
            <div className="flex w-full items-center gap-2">
              <Separator />
              <Typography variant="small">or</Typography>
              <Separator />
            </div>
            <Button className="w-full" variant="secondary">
              Sign in with Google
            </Button>
          </div>
        </CardContent>

        <CardFooter>
          <Typography variant="small">
            Return to <Link href={ROUTES.public.signIn}>Sign in</Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
