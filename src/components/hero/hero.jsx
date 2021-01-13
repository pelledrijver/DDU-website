import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/hero-image.png';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Hi!</h1>
            <h1 className="weight800 font60">
              Dit is De Digitale Upgrade.
            </h1>
            <p className="font20">
              Bent u klaar om uw waardevolle herinneringen te laten vastleggen voor de toekomst?
              Wij kunnen uw oude VHS videobanden omzetten naar een moderne digitale opslag, zoals
              een usb-stick, een harde schijf, een cd-rom, of we kunnen het online opslaan en de 
              bestanden naar u mailen.
            </p>
            <Button label="Stuur een bericht" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
