import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@dgthus-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Ver todos",
    variant: "primary",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "inline-radio",
      },
    },
    onClick: {
      action: "click",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Logout",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
};
