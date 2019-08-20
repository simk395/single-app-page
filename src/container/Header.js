import React from "react";
import Announcement from "../components/announcement";
import Account from "../components/navAccount";
import Logo from "../components/logo";
import Nav from "../components/navBar";

const header = () => {
  return (
    <header>
      <Announcement />
      <Account />
      <Logo />
      <Nav />
    </header>
  );
};

export default header;
