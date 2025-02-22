import { createTheme, MantineColorsTuple } from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#e3fff8",
  "#d1faf0",
  "#a8f1df",
  "#7ae9ce",
  "#55e2bf",
  "#3ddeb5",
  "#2cdcb0",
  "#19c39a",
  "#00ae88",
  "#009774",
];

export const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  colors: {
    myColor,
  },
});
