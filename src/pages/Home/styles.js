import styled from "styled-components";
import bg from "../../assets/pattern-bg.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Bg = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
`;

export const InputWrapper = styled.div`
  height: 40px;
  min-width: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
`;

export const Input = styled.input`
  font-size: 20px;
  width: 100%;
  border: none;
  outline: 0;
  padding: 0 10px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Submit = styled.input`
  border-radius: 0 10px 10px 0;
  border: none;
  height: 100px;
  width: 50px;
  color: #fff;
  background-color: #000;
  cursor: pointer;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: red;
  flex-grow: 1;
`;
