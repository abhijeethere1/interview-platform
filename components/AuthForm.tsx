"use client";

import { useState } from "react";
import { z } from "zod";
import Link from "next/link";
// import Image from "next/image";
import { toast } from "sonner";
import { auth } from "@/firebase/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { signIn, signUp } from "@/lib/actions/auth.action";
import FormField from "./FormField";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons

// Spinner Component for Loading
const Spinner = () => {
  return (
    <div className="w-5 h-5 border-l-2 border-r-2 border-t-2 border-black dark:border-white border-t-transparent rounded-full animate-spin" />
  );
};

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);

    try {
      if (type === "sign-up") {
        const { name, email, password } = data;

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result.success) {
          toast.error(result.message);
          setLoading(false);
          return;
        }

        toast.success("Account created successfully. Please sign in.");
        router.push("/sign-in");
      } else {
        const { email, password } = data;

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const idToken = await userCredential.user.getIdToken();
        if (!idToken) {
          toast.error("Sign in Failed. Please try again.");
          setLoading(false);
          return;
        }

        await signIn({
          email,
          idToken,
        });

        toast.success("Signed in successfully.");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
      setLoading(false);
    }
  };

  const isSignIn = type === "sign-in";

  const togglePassword = () => setShowPassword(!showPassword); // Function to toggle password visibility

  return (
    <div className="flex justify-center items-center min-h-screen p-4 ">
      <CardContainer className="inter-var">
        <CardBody className="bg-white dark:bg-black border border-black/[0.1] dark:border-white/[0.2] sm:w-[36rem] rounded-2xl p-10 shadow-2xl min-h-[600px] flex flex-col justify-center items-center space-y-6">
          {/* Header Section */}
          <div className="flex flex-col items-center space-y-3">
            <CardItem
              translateZ="50"
              className="text-5xl font-extrabold text-primary-500 dark:text-white text-center"
            >
              <h1>Welcome!</h1>
            </CardItem>
            <CardItem
              translateZ="30"
              className="text-2xl text-neutral-600 dark:text-neutral-300 text-center font-medium"
            >
              Interview Platform
            </CardItem>
          </div>

          {/* Form Section */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-9"
            >
              {!isSignIn && (
                <FormField
                  control={form.control}
                  name="name"
                  label="Name"
                  placeholder="Your Name"
                  type="text"
                />
              )}

              <FormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="Your email address"
                type="email"
              />

              {/* Password field with visibility toggle */}
              <div className="relative">
                <FormField
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                />
                {/* Toggle visibility icon */}
                <div
                  className="absolute right-3 top-1/2 transform-translate-y-1/2 cursor-pointer"
                  onClick={togglePassword}
                  style={{ zIndex: 10 }}
                >
                  {showPassword ? (
                    <FiEyeOff className="text-white dark:text-purple-400" size={20} />
                  ) : (
                    <FiEye className="text-white dark:text-purple-400" size={20} />
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center space-y-3">
                {/* Submit Button */}
                <CardItem translateZ={20} as="div">
                  <Button
                    type="submit"
                    className="text-black flex justify-center items-center"
                    disabled={loading}
                  >
                    {loading ? <Spinner /> : isSignIn ? "Sign In" : "Create an Account"}
                  </Button>
                </CardItem>
              </div>
            </form>
          </Form>

          {/* Footer */}
          <div className="flex flex-col items-center space-y-3">
            <CardItem
              translateZ={10}
              as="p"
              className="text-sm text-center text-neutral-600 dark:text-neutral-400"
            >
              {isSignIn ? "No account yet?" : "Have an account already?"}
              <Link
                href={!isSignIn ? "/sign-in" : "/sign-up"}
                className="ml-2 font-medium text-primary-600 dark:text-primary-300 hover:underline text-center"
              >
                {!isSignIn ? "Sign In" : "Sign Up"}
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default AuthForm;
