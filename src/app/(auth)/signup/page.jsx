"use client";
import SocialLogin from "@/components/auth/SocialLogin";
import Container from "@/components/global/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SignupPage = () => {
  //   const handleSignUp = async (event) => {
  //     event.preventDefault();
  //     const newUser = {
  //       name: event.target.name.value,
  //       email: event.target.email.value,
  //       password: event.target.password.value,
  //       img: event.target.img.value,
  //       role: "user",
  //     };
  //     try {
  //       const resp = await fetch(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`,
  //         {
  //           method: "POST",
  //           body: JSON.stringify(newUser),
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //         }
  //       );
  //       if (resp.ok) {
  //         // call swal
  //         console.log("User created successfully");
  //         event.target.reset();
  //       } else {
  //         const errorData = await resp.json();
  //         // call swal
  //         console.error("Sign up failed:", errorData);
  //       }
  //     } catch (error) {
  //       console.log("An error occured", error);
  //     }
  //   };
  return (
    <Container className="h-screen flex justify-center items-center overflow-auto">
      <div className="border p-4 md:p-8 w-full max-w-md rounded-md">
        <form
        //  onSubmit={handleSignUp}
        >
          <h4 className="text-2xl md:text-3xl pb-2">Create an account</h4>
          <p className="text-sm pb-6">
            Enter your email below to create your account
          </p>
          <Label htmlFor="name">Name</Label>
          <Input
            className="mt-2 md:mt-4 mb-4 md:mb-8"
            type="text"
            placeholder="Enter Name"
            name="name"
            required
          />
          <Label htmlFor="img">Image</Label>
          <Input
            className="mt-2 md:mt-4 mb-4 md:mb-8"
            type="text"
            placeholder="Enter Image"
            name="img"
            required
          />
          <Label htmlFor="email">Email</Label>
          <Input
            className="mt-2 md:mt-4 mb-4 md:mb-8"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />
          <Label htmlFor="password">Password</Label>
          <Input
            className="mt-2 md:mt-4 mb-4 md:mb-8"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <Button className="w-full gap-2 text-base group">
            Signup{" "}
            <FaArrowRightLong className="group-hover:translate-x-1 duration-200" />
          </Button>
        </form>
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="text-center">
          <SocialLogin />
          <p className="pt-6 font-medium text-sm">
            Already have an account?{" "}
            <Link
              className="text-primary underline hover:no-underline"
              href={"/login"}
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SignupPage;
