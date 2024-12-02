import {
  AIRBNB,
  AMAZON,
  APPLE,
  EBAY,
  FIGMA_ICON,
  NETFLIX,
  PRIME,
  SPOTIFY,
  STREAM,
  WALMART,
} from "../../public/assets/icon";

export const NAV_ITEMS = [
  {
    route: "/",
    type: "text",
    title: "Home",
  },
  {
    route: "/",
    type: "text",
    title: "FAQs",
  },
  {
    route: "/",
    type: "text",
    title: "Sign In",
    style: "border-l border-l-[B3B3B3] border-l-[3px]",
  },
  {
    route: "/",
    type: "button",
    title: "Get Started",
  },
];

export const MOBILE_NAV_ITEMS = [
  {
    route: "/",
    type: "text",
    title: "Home",
  },
  {
    route: "/",
    type: "text",
    title: "FAQs",
  },
  {
    route: "/",
    type: "button",
    title: "Get Started",
  },
  {
    route: "/",
    type: "button",
    title: "Sign In",
  },
];

export const HERO_IMAGES = {
  row_1: [
    {
      icon: AMAZON,
      style: "md:w-full w-[131px]",
    },
    {
      icon: STREAM,
      style: "md:w-full w-[123px]",
    },
    {
      icon: FIGMA_ICON,
      style: "md:w-full w-[46px]",
    },
  ],
  row_2: [
    {
      icon: AIRBNB,
      style: "md:w-full w-[118px]",
    },
    {
      icon: PRIME,
      style: "md:w-full w-[116px]",
    },
    {
      icon: SPOTIFY,
      style: "md:w-full w-[47px]",
    },
  ],
  row_3: [
    {
      icon: APPLE,
      style: "md:w-full w-[47px]",
    },
    {
      icon: EBAY,
      style: "md:w-full w-[97px]",
    },
    {
      icon: NETFLIX,
      style: "md:w-full w-[111px]",
    },
  ],
  row_4: [
    {
      icon: WALMART,
      style: "md:w-full w-[213px]",
    },
  ],
};

export const SERVICES_PERKS = [
  "Monthly Maintenance Fee",
  "No Card Creation Fee",
  "No Funding  Fee",
];

export const FAQS = [
  {
    content: "Zero! There's no maintenance fee",
    title: "How much is monthly maintenance fee for the card?",
  },
  {
    content: "Zero! There's no maintenance fee",
    title: "Is there a fee for funding to fund the card",
  },
  {
    content: "Zero! There's no maintenance fee",
    title: "How much do I pay to claim a card?",
  },
  {
    content: "Zero! There's no maintenance fee",
    title: "Do need to have a minimum balance? ",
  },
];

export const FOOTER_ITEMS = [
  {
    type: "text",
    title: "Contact Us",
    route: "/contact-us",
  },
  {
    type: "text",
    title: "Privacy",
    route: "/privacy-policy",
    style: "border-l border-l-[B3B3B3] border-l-[3px]",
  },
  {
    type: "text",
    title: "Terms",
    route: "/terms-conditions",
    style: "border-l border-l-[B3B3B3] border-l-[3px]",
  },
  {
    type: "text",
    title: "FAQs",
    route: "/faqs",
    style: "border-l border-l-[B3B3B3] border-l-[3px]",
  },
];
