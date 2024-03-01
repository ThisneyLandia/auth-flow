"use client";

import { FormProvider, useForm } from "react-hook-form";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { z } from "zod";

import { Link } from "@/components/links";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { ROUTES } from "@/routes/paths";
import { zodResolver } from "@hookform/resolvers/zod";

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const SignInForm = () => {
  const methods = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
  });
  const router = useRouter();

  const onSubmit = methods.handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: '/dashboard',
    });

    if (res?.error) return toast.error(res.error);

    // router.push('/dashboard')
    // router.refresh();
    toast.success("Signed in successfully");
  });

  return (
    <FormProvider {...methods}>
      <form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="me@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={methods.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Password</FormLabel>
                <Link
                  className="ml-auto inline-block text-sm underline"
                  href={ROUTES.public.forgotPassword}
                >
                  Forgot your password?
                </Link>
              </div>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col space-y-4">
          <Button className="w-full" type="submit">
            Sign in
          </Button>
          <div className="flex w-full items-center gap-2">
            <Separator />
            <Typography variant="small">or</Typography>
            <Separator />
          </div>
          <Button className="w-full" variant="secondary" onClick={() => signIn("google", {
            callbackUrl: '/dashboard'
          })}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
