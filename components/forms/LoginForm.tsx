"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { LoginFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";



export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}


const LoginForm = () => {

  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false);
  // Define form.
  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Define a submit handler.
  async function onSubmit({ username, password }: z.infer<typeof LoginFormValidation>) {
    setIsLoading(true);

    try {
      //Create userData object
      const loginData = { username, password }
      console.log(loginData)

      router.push("/dashboard");

    } catch (error) {
      console.log(error)
    }

    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-4 space-y-4">
          <h1 className="header">Admin Login</h1>
          <p className="text-dark-500">Sign in to manage and track waste</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="username"
          label="Username"
          placeholder="e.g admin"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="password"
          label="Password"
          type="password"
          placeholder="********"
          iconSrc="/assets/icons/check.svg"
          iconAlt="password"
        />

        <SubmitButton isLoading={isLoading}>Login </SubmitButton>
      </form>
    </Form>
  );
};

export default LoginForm;
