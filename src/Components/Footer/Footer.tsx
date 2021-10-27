import React from "react";
import { Segment, Container, Icon } from "semantic-ui-react";

const Footer = () => (
  <Segment inverted>
      <Container textAlign="center">
          Call Us: 800 00 0000
      </Container>
    <Container textAlign="right">
      Follow Us
      <Icon name="instagram" style={{ marginLeft: "0.2rem" }} />
      <Icon name="facebook" style={{ marginLeft: "0.2rem" }} />
      <Icon name="twitter" style={{ marginLeft: "0.2rem" }} />
    </Container>
  </Segment>
);

export default Footer;