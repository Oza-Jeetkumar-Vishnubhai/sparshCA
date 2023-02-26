import React from "react";
import CaAbout from "./CaAbout";
import CaHome from "./CaHome";
import CaPerks from "./CaPerks";
import CaRegister from "./CaRegister";

const Ca = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        // backgroundColor: "black",
        paddingTop: "100px",
        // color: "white",
      }}
    >
      <CaHome />
      <CaAbout />
      <CaPerks />
      <CaRegister />
    </div>
  );
};

export default Ca;
