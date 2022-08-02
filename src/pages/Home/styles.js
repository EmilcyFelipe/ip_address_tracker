import styled from "styled-components";
import bg from "../../assets/pattern-bg.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Bg = styled.div`
  width: 100%;
  height: 30%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const InputWrapper = styled.div`
  height: 40px;
  width: 500px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  max-inline-size: auto;
`;

export const Input = styled.input`
  font-size: 20px;
  border: none;
  width: 100%;
  outline: 0;
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
