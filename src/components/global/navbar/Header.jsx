import React from "react";
import Container from "../Container";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  let loggedIn = false;
  return (
    <div className="hidden md:block">
      <Container className="flex justify-between text-sm py-1 shadow-lg">
        <div>
          <ul className="inline-flex gap-x-4">
            <li>
              <Link className="hover:text-primary duration-300" href={"#"}>
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary duration-300"
                href={"/wishlist"}
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300" href={"#"}>
                Order Tracking
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {loggedIn ? (
            <ul>
              <li className="inline-flex gap-1">
                <p className="uppercase">Injamul Haque Somrat</p> ({" "}
                <Link className="text-primary duration-300" href={"#"}>
                  Logout
                </Link>{" "}
                )
              </li>
            </ul>
          ) : (
            <ul className="flex gap-4">
              <li>
                <Link
                  className="hover:text-primary duration-300"
                  href={"/login"}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary duration-300"
                  href={"/signup"}
                >
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </Container>
      <hr />
    </div>
  );
};

export default Header;
