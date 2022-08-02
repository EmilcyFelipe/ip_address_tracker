import React, { useEffect, useState } from "react";

import BannerData from "../../components/BannerData";
import api from "../../services/api";

import { Container, Bg, InputWrapper, Input, Submit } from "./styles";

export default function Home() {
  const [ipAddress, setIpAddress] = useState();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadIpAddress() {
      const response = await api.get(
        `country?apiKey=at_hUrhrVHMPTSDaUf50MKP0X8ogG9Dm`
      );
      setData(response.data);
    }
    loadIpAddress();
  }, []);

  async function sendRequest(e) {
    e.preventDefault();
    const response = await api.get(
      `country?apiKey=at_hUrhrVHMPTSDaUf50MKP0X8ogG9Dm&ipAddress=${ipAddress}`
    );
    setData(response.data);
  }
  return (
    <Container>
      <Bg>
        <h2 style={{ color: "#FFF" }}>IP Adress Tracker</h2>
        <form onSubmit={sendRequest}>
          <InputWrapper>
            <Input
              type="text"
              name="IP"
              placeholder="Search for any IP address or domain"
              onChange={(value) => {
                setIpAddress(value.target.value);
              }}
            />
            <Submit type="submit" value=">" />
          </InputWrapper>
        </form>
        <BannerData data={data}></BannerData>
      </Bg>
    </Container>
  );
}
