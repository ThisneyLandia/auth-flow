"use client";

import { FormProvider, useForm } from "react-hook-form";

import { useSession } from "next-auth/react";

import { z } from "zod";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

const updateProfileSchema = z
  .object({
    firstname: z.string().nonempty(),
    lastname: z.string().nonempty(),
  })
  .transform((data) => ({
    ...data,
    name: `${data.firstname} ${data.lastname}`,
  }));

export const UpdateProfileForm = () => {
  const session = useSession();

  const methods = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      firstname: session.data?.user?.name?.split(" ")[0] ?? "",
      lastname: session.data?.user?.name?.split(" ")[1] ?? "",
    },
  });

  const onSubmit = methods.handleSubmit((data) => {});

  return (
    <FormProvider {...methods}>
      <form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
        <div className="flex flex-wrap items-center gap-4">
          <FormField
            control={methods.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="firstname">Firstname</FormLabel>
                <FormControl>
                  <Input {...field} />
                  <FormMessage />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="lastname">Lastname</FormLabel>
                <FormControl>
                  <Input {...field} />
                  <FormMessage />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </form>
    </FormProvider>
  );
};
