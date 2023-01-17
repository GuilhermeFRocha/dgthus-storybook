import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@dgthus-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: "https://github.com/GuilhermeFRocha.png",
    alt: "Guilherme Freitas",
  },
  argTypes: {
    sizes: {
      control: {
        type: "select",
      },
      options: ["2xl", "4xl", "medium", "large"],
    },
  },
};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    children: "GF",
  },
};
