import styled from "styled-components";
import { Size, FontSize } from "../../Interfaces/sizes";

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  size: Size;
}

interface ContentProps extends React.HTMLAttributes<HTMLElement> {
  fontSize: FontSize;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: #4370ff;
  border-radius: 50%;
`;

export const Content = styled.p<ContentProps>`
  padding: 20%;
  color: #afc2ff;
  text-align: center;
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 13px;
  font-family: "Source Sans Pro";
  font-style: normal;
`;
