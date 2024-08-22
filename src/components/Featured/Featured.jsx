import React from "react";
import "./Featured.css";
import Card from "./Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";
function Featured() {
  return (
    <div className="featured">
      <div className="imgs">
        <img src="/images/featured.jpg" />
        <img src="/images/featured-icon.png" />
      </div>
      <div>
        <SectionTitle title="Featured" />
        <h1>Best Appartment & Sea View</h1>
        <div className="useful">
          <p>Best useful links?</p>
          <p>
            Get the best villa website template in HTML CSS and Bootstrap for
            your business.TemplateMoprovides you the{" "}
            <span>best free CSS templates</span> in the world.Please tell your
            friends about it.
            <br />
            <br />
            How does this work?
          </p>

          <p>Why is Villa Agency the best?</p>
        </div>
      </div>
      <div className="infCard">
        <Card
          img="/images/info-icon-01.png"
          title="250 m2"
          more="Total Flat Space"
        />
        <Card
          img="/images/info-icon-02.png"
          title="Contract"
          more="Contract Ready"
        />
        <Card
          img="/images/info-icon-03.png"
          title="Payment"
          more="Payment"
          imgTitle="Process"
        />
        <Card
          img="/images/info-icon-04.png"
          title="Safety"
          more="24/7 Under"
          imgTitle="Controle"
        />
      </div>
    </div>
  );
}

export default Featured;
