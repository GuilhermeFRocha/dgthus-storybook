import type { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "@dgthus-ui/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {},
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name",
  },
};
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};
