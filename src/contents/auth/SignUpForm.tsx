"use client";

import { FormProvider, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { AxiosError } from "axios";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { api } from "@/lib/api";
import { ROUTES } from "@/routes/paths";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z
  .object({
    firstname: z.string().min(1),
    lastname: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    "password-confirm": z.string().min(6),
  })
  .transform(({ ...data }) => ({
    ...data,
    fullname: `${data.firstname} ${data.lastname}`,
  }));

export const SignUpForm = () => {
  const methods = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });
  const router = useRouter();

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      await api.post("/auth/register", data);
      toast.success("You have signed up successfully");
      router.push(ROUTES.private.home);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      } else if (error instanceof Error) toast.error(error.message);
      else toast.error("An error occurred");
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FormField
            control={methods.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="password-confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm your password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col space-y-4">
          <Button className="w-full" type="submit">
            Sign up
          </Button>
          <div className="flex w-full items-center gap-2">
            <Separator />
            <Typography variant="small">or</Typography>
            <Separator />
          </div>
          <Button className="w-full" variant="outline">
            Sign up with Google
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
