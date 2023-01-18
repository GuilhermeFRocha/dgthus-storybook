import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@dgthus-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {
  args: {
    children: "GF",
  },
};

export const WithImage: StoryObj<AvatarProps> = {
  args: {
    src: "https://github.com/GuilhermeFRocha.png",
    alt: "Guilherme Freitas",
  },
};
