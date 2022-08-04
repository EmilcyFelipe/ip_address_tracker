import React, { useEffect, useState, useRef, useCallback } from "react";

import BannerData from "../../components/BannerData";
import api from "../../services/api";

import {
  Container,
  Bg,
  InputWrapper,
  Input,
  Submit,
  MapWrapper,
} from "./styles";
import {
  MapContainer,
  useMap,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";

export default function Home() {
  const [ipAddress, setIpAddress] = useState();
  const [data, setData] = useState(null);
  const [position, setPosition] = useState([-15.77972, -47.92972]);

  const [map, setMap] = useState(null);

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  useEffect(() => {
    async function loadIpAddress() {
      const response = await api.get(
        `country,city?apiKey=at_hUrhrVHMPTSDaUf50MKP0X8ogG9Dm`
      );
      setData(response.data);
      let coordinates = [
        response.data.location.lat,
        response.data.location.lng,
      ];
      setPosition(coordinates);
    }
    loadIpAddress();
  }, []);

  async function sendRequest(e) {
    e.preventDefault();
    const response = await api.get(
      `country,city?apiKey=at_hUrhrVHMPTSDaUf50MKP0X8ogG9Dm&ipAddress=${ipAddress}`
    );
    setData(response.data);
    let coordinates = [response.data.location.lat, response.data.location.lng];
    setPosition(coordinates);
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
      <MapWrapper>
        <MapContainer
          style={{ width: "100%", height: "100%" }}
          center={position}
          zoom={13}
          ref={setMap}
          scrollWheelZoom={true}
        >
          <ChangeView center={position} zoom={13} />
          <Marker position={position}></Marker>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </MapWrapper>
    </Container>
  );
}
