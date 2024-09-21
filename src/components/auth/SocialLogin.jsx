"use client";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";

const SocialLogin = () => {
  //   const session = useSession();
  //   const router = useRouter();
  //   const handleSocialSignin = async (provider) => {
  //     const res = await signIn(provider, { redirect: false });
  //   };
  //   useEffect(() => {
  //     if (session.status === "authenticated") {
  //       router.push("/");
  //     }
  //   }, [router, session.status]);

  return (
    <div className="grid grid-cols-1 sm:flex justify-between items-center gap-3">
      <Button
        // onClick={() => handleSocialSignin("google")}
        className="gap-3"
      >
        <span>Google</span> <FaGoogle className="text-lg" />
      </Button>
      <Button
        // onClick={() => handleSocialSignin("github")}
        className="gap-3"
      >
        <span>Github</span> <FaGithub className="text-lg" />
        {/* <FaGithub /> */}
      </Button>
      <Button className="gap-3">
        <span>Facebook</span> <FaFacebook className="text-lg" />
        {/* <FaFacebook /> */}
      </Button>
    </div>
  );
};

export default SocialLogin;
