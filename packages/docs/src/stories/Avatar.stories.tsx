import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@dgthus-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/GuilhermeFRocha.png",
    alt: "Guilherme Freitas",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
