import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Chip } from "@/components/common/Chip";

const meta = {
  title: "Common/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    imageUrl: {
      control: {
        type: "text",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
    emoji: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/150",
    title: "Chip",
  },
};

export const WithEmoji: Story = {
  args: {
    emoji: "🎉",
    title: "Chip",
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Chip",
  },
};
