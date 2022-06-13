import React from "react";
import Avatar from "../components/React/avatar";
import { Size } from "../Interfaces/sizes";

export default {
  title: "Avatar",
  component: Avatar,
};

export const small = () => <Avatar size={Size.small} image="" notification />;

export const regular = () => (
  <Avatar size={Size.regular} image="" notification />
);

export const medium = () => <Avatar size={Size.medium} image="" notification />;

export const large = () => <Avatar size={Size.large} image="" notification />;
