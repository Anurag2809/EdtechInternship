import React from "react";
import ReactCardCarousel from "react-card-carousel";
import Card from "./Card";

function CONTAINER_STYLE() {
  return {
    position: "relative",
    height: "50vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "start",
    alignItems: "middle"
  };
}

function CARD_STYLE() {
  return {
    height: "350px",
    width: "400px",
    paddingTop: "80px",
    textAlign: "center",
    background: "#52C0F5",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box"
  };
}

function Cardco() {
  return (

    <div style={CONTAINER_STYLE()}>
      <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
       <div  style={CARD_STYLE()}  className="card bg-base-200 shadow-xl p-4"><Card/></div>
        <div style={CARD_STYLE()} className="card bg-base-200 shadow-xl p-4"><Card/></div>
        <div  style={CARD_STYLE()}  className="card bg-base-200 shadow-xl p-4"><Card/></div>
        <div style={CARD_STYLE()} className="card bg-base-200 shadow-xl p-4"><Card/></div>
       
      </ReactCardCarousel>
    </div>
  );
}

export default Cardco;