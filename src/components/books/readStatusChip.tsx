import React from "react";
import Chip from "@mui/material/Chip";
import { Status } from "@/graphql/graphql";

// Define the type for the color values
type ChipColor = "success" | "default" | "warning";

export interface BookStatusChipProps {
  status: Status;
}

const statusColor: Record<BookStatusChipProps["status"], ChipColor> = {
  read: "success",
  unread: "default",
  reading: "warning",
};

// This should now work without type errors
export default function ReadStatusChip(props: BookStatusChipProps) {
  return <Chip color={statusColor[props.status]} label={props.status} />;
}
