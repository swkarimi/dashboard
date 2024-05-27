import localFont from "next/font/local";

export const sahelFont = localFont({
  src: [
    {
      path: "./Sahel.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Sahel-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sahel",
});
