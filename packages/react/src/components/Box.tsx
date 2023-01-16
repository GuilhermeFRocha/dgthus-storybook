import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Box = styled("div", {
  borderRadius: "$xs",
  backgroundColor: "$gray1100",
  padding: "$4",
  minWidth: 400,
  minHeight: 70,
});

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}
