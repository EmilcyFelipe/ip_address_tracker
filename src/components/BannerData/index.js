import React, { useEffect, useState } from "react";
import { Container, SectionBanner, Title, Response, Spacer } from "./styles";

export default function BannerData({ data }) {
  return (
    <Container>
      <SectionBanner>
        <Title>IP ADDRESS</Title>
        <Response>{data ? data.ip : ""}</Response>
      </SectionBanner>
      <Spacer />
      <SectionBanner style={{ borderLeft: "2px" }}>
        <Title>LOCATION</Title>
        <Response>{data ? data.location.region : ""}</Response>
      </SectionBanner>
      <Spacer />
      <SectionBanner>
        <Title>TIMEZONE</Title>
        <Response>{data ? "UTC" + data.location.timezone : ""}</Response>
      </SectionBanner>
      <Spacer />
      <SectionBanner>
        <Title>ISP</Title>
        <Response>{data ? data.isp : ""}</Response>
      </SectionBanner>
    </Container>
  );
}
