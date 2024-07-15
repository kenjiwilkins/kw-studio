import type { Meta, StoryObj } from "@storybook/react";
import { ViewSwitch } from "@/components/common/ViewSwitch";
import { GridView, TableView } from "@mui/icons-material";
const meta = {
  title: "Common/ViewSwitch",
  component: ViewSwitch,
  args: {
    value: "grid",
    options: [
      {
        icon: GridView,
        label: "grid",
      },
      {
        icon: TableView,
        label: "table",
      },
    ],
    ariaLabel: "view switch",
  },
} as Meta<typeof ViewSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "grid",
  },
};
