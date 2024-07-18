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
  }[];
  onClick?: (id: string) => void;
};

export const IconList = (props: Props) => {
  return (
    <List subheader={<ListSubheader>{props.listTitle}</ListSubheader>}>
      {props.items.map((item, index) => (
        <ListItem key={index}>
          <ListItemButton onClick={() => props.onClick?.(item.id)}>
            <ListItemIcon>
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.title} />
              ) : (
                item.emoji
              )}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
