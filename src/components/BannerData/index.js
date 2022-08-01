import React from "react";
import { Container, SectionBanner, Title, Response, Spacer } from "./styles";

export default function BannerData() {
  return (
    <Container>
      <SectionBanner>
        <Title>IP ADRESS</Title>
        <Response>192.212.174.101</Response>
      </SectionBanner>
      <Spacer />
      <SectionBanner style={{ borderLeft: "2px" }}>
        <Title>LOCATION</Title>
        <Response>Brooklyn, NY 10001</Response>
      </SectionBanner>
      <Spacer />
      <SectionBanner>
        <Title>TIMEZONE</Title>
        <Response>UTC-05:00</Response>
      </SectionBanner>
      <Spacer />
      <SectionBanner>
        <Title>ISP</Title>
        <Response>SpaceX Starlink</Response>
      </SectionBanner>
    </Container>
  );
}
