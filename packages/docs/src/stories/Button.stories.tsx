import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@dgthus-ui/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Enviar",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: "big",
  },
};