import React from "react";
import Container from "../Container";
import Link from "next/link";

const Header = () => {
  let loggedIn = true;
  return (
    <div className="hidden md:block">
      <Container className="flex justify-between text-xs py-1">
        <div>
          <ul className="inline-flex gap-x-3">
            <li>
              <Link className="hover:text-primary duration-300" href={"#"}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300" href={"#"}>
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
            <ul className="flex gap-2">
              <li>
                <Link className="hover:text-primary duration-300" href={"#"}>
                  Login
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary duration-300" href={"#"}>
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
