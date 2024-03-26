import React from "react";
import LogoutButton from "../LogoutButton";
import { CardComponent } from "./CardComponent";

const SigninBody = () => {
  return (
    <div className="flex justify-center items-center flex-col lg:flex-row">
      <CardComponent
        title="Menu"
        desc="Click below to check Menu"
        linkName="/menu"
        buttonName="Visit Menu"
        foot="Full menu is available in Reservations."
      />
      <CardComponent
        title="Reservation"
        desc="Click below for Reservation"
        linkName="/reservations"
        buttonName="Reserve a Table"
        foot="Reserve a table today by 6PM, it's 20% off :)"
      />
      <LogoutButton />
    </div>
  );
};

export default SigninBody;
