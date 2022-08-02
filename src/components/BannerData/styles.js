import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  background-color: #fff;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: -50px;
  z-index: 1000;
`;

export const SectionBanner = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;
export const Title = styled.h5``;
export const Response = styled.p`
  font-size: 20px;
`;

export const Spacer = styled.div`
  width: 1px;
  height: 60%;
  background-color: rgba(0, 0, 0, 0.4);
`;
