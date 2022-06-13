import { FontSize, Size } from "../../Interfaces/sizes";

export const getFontSize = (size: Size): FontSize => {
  switch (true) {
    case size === Size.small:
      return FontSize.small;
    case size === Size.regular:
      return FontSize.regular;
    case size === Size.medium:
      return FontSize.medium;
    case size === Size.large:
      return FontSize.large;
    default:
      return FontSize.regular;
  }
};
