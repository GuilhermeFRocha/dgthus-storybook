import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@dgthus-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Paragraphy Text",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const Secundary: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
};
