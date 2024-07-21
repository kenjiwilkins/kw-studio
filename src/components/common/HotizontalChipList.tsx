import { Box } from "@mui/material";
import { Chip, ChipProps } from "./Chip";

interface Props {
  width?: number;
  chips: ChipProps[];
}

export const HorizontalChipList = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        maxWidth: props.width,
        minWidth: "fit-content",
      }}
    >
      {props.chips.map((chip, index) => (
        <Chip key={index} {...chip}></Chip>
      ))}
    </Box>
  );
};
