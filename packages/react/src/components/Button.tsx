import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$xs",
  fontSize: "$xs",
  fontWeight: "$bold",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 90,
  height: "$11",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  padding: "$3 $6",

  svg: {
    width: "$4",
    height: "$4",
  },

  variants: {
    variant: {
      primary: {
        color: "$white100",
        background: "$purple300",

        "&:not(:disabled):hover": {
          background: "$purple500",
        },
      },
      secondary: {
        border: "2px solid #7453F8",
        background: "transparent",
        color: "$white200",

        "&:not(:disabled):hover": {
          background: "$purple300",
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}
