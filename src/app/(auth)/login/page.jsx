"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import Link from "next/link";
// import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialLogin from "@/components/auth/SocialLogin";
import Container from "@/components/global/Container";
import { Label } from "@/components/ui/label";
import { FaArrowRightLong } from "react-icons/fa6";

const LoginPage = () => {
  const router = useRouter();
  //   const handleLogin = async (event) => {
  //     event.preventDefault();
  //     const email = event.target.email.value;
  //     const password = event.target.password.value;
  //     const res = await signIn("credentials", {
  //       email,
  //       password,
  //       // redirect: false,
  //     });
  //     if (res.ok) {
  //       event.target.reset();
  //       router.push("/");
  //     }
  //   };
  return (
    <Container className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md border p-4 md:p-8 rounded-md">
        <form
        // onSubmit={handleLogin}
        >
          <h4 className="text-2xl md:text-3xl pb-2">Login Page</h4>
          <p className="text-sm pb-6">
            Enter your email and password below to login
          </p>
          <Label htmlFor="email">
            <b>Email</b>
          </Label>
          <Input
            className="mt-2 md:mt-4 mb-4 md:mb-8"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />
          <Label htmlFor="password">
            <b>Password</b>
          </Label>
          <Input
            className="mt-2 md:mt-4 mb-4 md:mb-8"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <Button type="submit" className="w-full gap-2 text-base group">
            Login
            <FaArrowRightLong className="group-hover:translate-x-1 duration-200" />
          </Button>
        </form>
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or login with
            </span>
          </div>
        </div>
        <div className="text-center">
          <SocialLogin />
          <p className="pt-6 font-medium text-sm">
            No Account?{" "}
            <Link
              className="text-primary underline hover:no-underline"
              href={"/signup"}
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
