import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="Over ons." />
      <p className="font20">

        De Digitale Upgrade is gestart in 2019 en we hebben nu al 50+ tevreden klanten.  
        Wij <br/> kunnen uw VHS-videobanden voor u omzetten, zodat u alle mooie herinneringen 
        zelf <br/> thuis kunt bekijken op uw computer, laptop of tv. Met een met een bescheiden 
        prijs <br/> van slechts € 7,50 per videoband zijn wij momenteel de goedkoopste aanbieder van <br/>
        het digitaliseren van videobanden. Bovendien krijgt u bij 10 videobanden of meer <br/> altijd korting. 

      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Pelle Drijver" job="Student Computer Science" />
        </Col>
        {/* <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Han Solo" job="Graphic Designer" />
        </Col> */}
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
