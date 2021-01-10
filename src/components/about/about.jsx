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
        Wij van De Digitale Upgrade zijn begonnen in 2019 en hebben al ruim 50+
        tevreden klanten <br/> kunnen helpem met het omzetten van hun VHS videobanden
        vol dierbare herinneringen. <br/> Wij zijn momenteel de meest goedkope
        aanbieder van het digitaliseren van videobanden <br/> met een bescheiden 
        prijs van maar liefst €7,50 per videoband. Daarnaast wordt er altijd <br/> 
        korting gegeven bij 10 of meer videobanden. 
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
