import Image from "next/image";
import Link from "next/link";

import Balancer from "react-wrap-balancer";

import { Github, Twitter, Facebook } from "lucide-react";

// import Logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button";
import Container from "../Container";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer>
      <section className={cn("pt-8 pb-4 md:pt-12 md:pb-6")}>
        <Container className="grid gap-12 md:grid-cols-[1fr_0.5fr_0.5fr_0.5fr] pb-4">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/" className="uppercase text-lg font-semibold">
              Tukitaki Bazar
            </Link>
            <p>
              <Balancer>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat eveniet impedit sint. Ipsum, veniam. Voluptatum.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-medium">Customer Service</h5>
            <Link href="/">Shipping Info</Link>
            <Link href="/">How to buy</Link>
            <Link href="/">How to track</Link>
            <Link href="/">Support center & FAQ</Link>
            <Link href="/">Report suspicios activity</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-medium">Company Info</h5>
            <Link href="/">About Us</Link>
            <Link href="/privacy-policy">Affiliate: Earn commission</Link>
            <Link href="/terms-of-service">Careers</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-medium">Help</h5>
            <Link href="/">Terms of use</Link>
            <Link href="/">Terms & conditions</Link>
            <Link href="/">Return & refund policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/">Partner with Tukitaki</Link>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t pt-4 md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Github />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © Copyright 2024 All rights reserved by{" "}
            <a
              className="hover:underline"
              href="https://e-commerce-demo-inj.netlify.app"
            >
              tukitaki bazar
            </a>{" "}
          </p>
        </Container>
      </section>
    </footer>
  );
}
