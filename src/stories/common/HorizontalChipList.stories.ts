import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HorizontalChipList } from "@/components/common/HotizontalChipList";

const meta = {
  title: "Common/HorizontalChipList",
  component: HorizontalChipList,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    width: {
      control: {
        type: "number",
      },
    },
  },
} as Meta<typeof HorizontalChipList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 100,
    chips: [
      {
        imageUrl: "https://via.placeholder.com/150",
        title: "Chip 1",
      },
      {
        emoji: "🎉",
        title: "Chip 2",
      },
      {
        title: "Chip 3",
      },
    ],
  },
};
