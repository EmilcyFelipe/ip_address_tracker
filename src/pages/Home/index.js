import React, { useEffect, useState } from "react";

import BannerData from "../../components/BannerData";

import { Container, Bg, InputWrapper, Input, Submit } from "./styles";

export default function Home() {
  useEffect(() => {
    console.log("oas");
  }, []);
  function sendRequest(e) {
    e.preventDefault();
    console.log("Óla");
  }
  return (
    <Container>
      <Bg>
        <h2 style={{ color: "#FFF" }}>IP Adress Tracker</h2>
        <form onSubmit={({ value }) => console.log(value)}>
          <InputWrapper>
            <Input
              type="text"
              name="IP"
              placeholder="Search for any IP address or domain"
            />
            <Submit
              onClick={() => console.log("sdfsd")}
              type="submit"
              value=">"
            />
          </InputWrapper>
        </form>
        <BannerData></BannerData>
      </Bg>
    </Container>
  );
}
