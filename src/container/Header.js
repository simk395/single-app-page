import React from "react";
import Announcement from "../components/announcement";
import Account from "../components/navigation/account";
import Logo from "../components/logo";
import Nav from "../components/navigation/Bar";
import Mobile from "../components/navigation/mobile";

const header = () => {
  return (
    <header className="header">
      <Announcement />
      <Account />
      <Logo />
      {/* <Nav /> */}
      <Mobile />
    </header>
  );
};

export default header;
