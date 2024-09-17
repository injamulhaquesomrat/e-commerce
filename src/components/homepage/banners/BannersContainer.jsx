import Container from "@/components/global/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannersContainer = () => {
  return (
    <Container
      className={
        "grid gap-8 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }
    >
      <div className="col-span-1">
        <Link href="#">
          <Image
            className="rounded-md w-full "
            src={"https://placehold.co/900x600.png"}
            alt="Banner"
            height={600}
            width={900}
          />
        </Link>
      </div>
      <div className="col-span-1">
        <Link href="#">
          <Image
            className="rounded-md w-full "
            src={"https://placehold.co/900x600.png"}
            alt="Banner"
            height={600}
            width={900}
          />
        </Link>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-1">
        <Link href="#">
          <Image
            className="w-full md:w-1/2 lg:w-full mx-auto rounded-md "
            src={"https://placehold.co/900x600.png"}
            alt="Banner"
            height={600}
            width={900}
          />
        </Link>
      </div>
    </Container>
  );
};

export default BannersContainer;
