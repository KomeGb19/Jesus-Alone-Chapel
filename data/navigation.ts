import { StaggeredMenuItem } from "@/components/StaggeredMenu";

export const menuItems: StaggeredMenuItem[] = [
  { label: "About", ariaLabel: "About Jesus Alone Chapel", link: "/about" },
  {
    label: "Fellowships",
    ariaLabel: "Campus communities",
    link: "/fellowships",
  },
  {
    label: "BUjCF",
    ariaLabel: "Bells University Joint Christain Fellowship",
    link: "/bujcf",
  },
  { label: "Sermons", ariaLabel: "Impacting messages", link: "/sermons" },
  { label: "Events", ariaLabel: "What we are up to", link: "/events" },
  { label: "Give", ariaLabel: "Donate to the Church", link: "/give" },
];

export const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];
