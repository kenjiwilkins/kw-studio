"use client";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Book, RestaurantMenu } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Bookshelf",
    link: "/bookshelf",
    icon: Book,
  },
  {
    title: "Recipe Book",
    link: "/recipe",
    icon: RestaurantMenu,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isLinkSelected = (link: string) => {
    return pathname.includes(link.replace("/", ""));
  };
  return (
    <Drawer variant="persistent" open>
      <div className="h-16 flex items-center justify-center">
        <Link href="/">
          <p className="text-2xl font-bold text-kw-studio-main">KW Studio</p>
        </Link>
      </div>
      <Divider />
      <List>
        {sidebarItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton selected={isLinkSelected(item.link)}>
              <Link href={item.link} className="flex items-center">
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
