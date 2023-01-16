import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@dgthus-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Title Box</Text>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
