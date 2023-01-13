import { ComponentProps } from "react";

import { styled } from "./styles";

export const Button = styled("button", {
  fontFamily: "default",
  backgroundColor: "$purple300",
  borderRadius: "$xs",
  padding: "$3 $6",
  color: "$white",
  fontWeight: "$bold",
  border: 0,

  variants: {
    size: {
      small: {
        fontSize: "$sm",
      },
      big: {
        fontSize: "$md",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});
export type ButtonProps = ComponentProps<typeof Button>;
