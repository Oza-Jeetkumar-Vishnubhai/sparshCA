import React from "react";
import "./caCss.css";
import { AiFillCaretRight } from "react-icons/ai";
import bg from "./assets/bg.jpg"

const CaHome = () => {
  return (
    <>
      <div
        style={{
          height: "100%",
          backgroundColor: "gray",
          backgroundImage: `url(${bg})`,
          //   padding: "3rem",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          display: "flex",
          alignItems: "center",
          paddingLeft:"2rem",
          paddingRight:"2rem"
        }}
      >
        <div style={{width:"100%",paddingBottom:"3rem"}}>
          <p className="txt" style={{ marginBottom: "15px" }}>
            <i>SPARSH,SVNIT Surat</i>
          </p>
          <span className="txt">Campus</span>
          <br />
          <span className="txt">Ambassador</span>
          <br />
          <span className="txt">Program</span>
          <br />
          <div
            className="lowerText"
            style={{
              marginTop: "50px",
            }}
          >
            <div className="livenow">
              {/* icon */}
              <AiFillCaretRight size={35} />
              <span style={{fontSize:40,letterSpacing:2}}>Live Now</span>
            </div>
            <div className="images">
              <img src="" alt="sparsh" />
              <img src="" alt="svnit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaHome;
