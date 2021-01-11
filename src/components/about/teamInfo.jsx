import React from "react";
// SCSS
import "./teamInfo.scss";

const about = () => (
  <div className="team__info flex-center">
    <div>
      <h4 className="font20 weight800">Hoe we zijn begonnen</h4>
      <p className="font15 weight500">
        De Digitale Upgrade is opgericht door Pelle, een student informatica
        aan de Vrije Universiteit. Wat oorsprongelijk begon als een kleine 
        bijverdienste is inmiddels uitgegroeid tot een professionele passie en
        veelbelovende toekomst.

      </p>
      <p className="font15 weight500"><strong><a href="https://www.linkedin.com/in/pelledrijver/" target="blank" style={{color:"inherit"}}>Meer over Pelle</a></strong></p>
    </div>
  </div>
);

export default about;
