import React from "react";
import Chip from "@mui/material/Chip";

// Define the type for the color values
type ChipColor = "success" | "default" | "warning";

const statusColor: Record<string, ChipColor> = {
  read: "success",
  unread: "default",
  reading: "warning",
};

const status = "read"; // Example status
const chipColor = statusColor[status]; // This will now be of type ChipColor

// This should now work without type errors
export default function ReadStatusChip(props: { status: string }) {
  return <Chip color={statusColor[props.status]} label={props.status} />;
}
