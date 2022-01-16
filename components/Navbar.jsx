import React from "react";
import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

function NavBar() {
  return (
    <nav className="navbar container">
      <Link href="/">
        <a className="navbar-brand">SuperHero identity</a>
      </Link>
      <Link href="/new">
        <MDBBtn>New Identity</MDBBtn>
      </Link>
    </nav>
  );
}

export default NavBar;
