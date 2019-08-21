import React from "react";
import Announcement from "../components/announcement";
import Account from "../components/navigation/account";
import Logo from "../components/logo";
import Nav from "../components/navigation/Bar";
import NavMobile from "../components/navigation/mobile";

const header = () => {
  return (
    <header className="header">
      <Announcement />
      <Account />
      <Logo />
      <Nav />
      <NavMobile />
    </header>
  );
};

export default header;
