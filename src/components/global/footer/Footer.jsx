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
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr] pb-4">
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
            <h5>Website</h5>
            <Link href="/">Blog</Link>
            <Link href="/">Authors</Link>
            <Link href="/">Categories</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
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
            © <a href="https://github.com/brijr/components">brijr/components</a>
            . All rights reserved. 2024-present.
          </p>
        </Container>
      </section>
    </footer>
  );
}
