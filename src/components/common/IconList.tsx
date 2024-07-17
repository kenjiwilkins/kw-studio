import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

type Props = {
  listTitle?: string;
  items: {
    imageUrl?: string;
    title: string;
    emoji?: string;
    id: string;
  };
  onClick?: (id: string) => void;
};

export const IconList = (props: Props) => {
  return (
    <List subheader={<ListSubheader>{props.listTitle}</ListSubheader>}></List>
  );
};
