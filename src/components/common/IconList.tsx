import { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Paper,
  Skeleton,
} from "@mui/material";
import { Chip } from "./Chip";

type Props = {
  listTitle?: string;
  maxHeight?: number;
  maxWidth?: number;
  items: {
    imageUrl?: string;
    title: string;
    emoji?: string;
    id: string;
  }[];
  onClick?: (id: string) => void;
};

const IconListSkeleton = (props: { width?: number }) => {
  const skeletonCount = 3;
  return (
    <Fragment>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <ListItem
          key={index}
          sx={{
            padding: 0,
          }}
        >
          <ListItemButton sx={{ padding: "4px 16px" }} onClick={() => {}}>
            <Skeleton
              variant="rounded"
              width={props.width ? props.width : 200}
              sx={{ fontSize: "1rem" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </Fragment>
  );
};

const IconListBody = (props: Props) => {
  return (
    <Fragment>
      {props.items.map((item, index) => (
        <ListItem
          key={index}
          sx={{
            padding: 0,
          }}
        >
          <ListItemButton
            sx={{ padding: "4px 16px" }}
            onClick={() => props.onClick?.(item.id)}
          >
            <Chip
              imageUrl={item?.imageUrl}
              emoji={item?.emoji}
              title={item.title}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </Fragment>
  );
};

export const IconList = (props: Props) => {
  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: props.maxWidth || "none",
        maxHeight: props.maxHeight || "none",
        overflow: "auto",
      }}
    >
      <List subheader={<ListSubheader>{props.listTitle}</ListSubheader>}>
        {props.items.length === 0 ? (
          <IconListSkeleton
            width={props.maxWidth ? props.maxWidth : undefined}
          />
        ) : (
          <IconListBody {...props} />
        )}
      </List>
    </Paper>
  );
};
