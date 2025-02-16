import { Avatar, Chip as MuiChip } from "@mui/material";

export type ChipProps = {
  imageUrl?: string;
  title: string;
  emoji?: string;
};

export const Chip = (props: ChipProps) => {
  return (
    <MuiChip
      avatar={
        props.emoji ? (
          <Avatar>{props.emoji}</Avatar>
        ) : props.imageUrl ? (
          <Avatar src={props.imageUrl}></Avatar>
        ) : (
          <Avatar>{props.title[0]?.toUpperCase() || ""}</Avatar>
        )
      }
      label={props.title || "unknown"}
    ></MuiChip>
  );
};
