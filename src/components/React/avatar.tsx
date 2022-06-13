import React from "react";
import { Size } from "../../Interfaces/sizes";
import { getFontSize } from "../utils/sizeHelper";
import { Wrapper, Content } from "./avatar.styled";

interface Props {
  size: Size;
  image: string;
  notification: boolean;
}

const Avatar: React.FC<Props> = (props: Props) => {
  const { size, image, notification } = props;
  const fontSize = getFontSize(size);
  return (
    <Wrapper size={size}>
      <Content fontSize={fontSize}>GS</Content>
    </Wrapper>
  );
};

export default Avatar;
