import { CreditCard, ShoppingCart, Wallet2 } from "lucide-react";
import { createElement } from "react";
export const yearsPlan = [
  {
    value: "2024",
    label: "2024",
  },
  {
    value: "2025",
    label: "2025",
  },
  {
    value: "2026",
    label: "2026",
  },
  {
    value: "2027",
    label: "2027",
  },
  {
    value: "2028",
    label: "2028",
  },
  {
    value: "2029",
    label: "2029",
  },
  {
    value: "2030",
    label: "2030",
  },
];

export const CardItem = [
  {
    header: "1jt",
    title: "Untuk keperluan",
    icon: createElement(ShoppingCart, {
      size: 35,
      className: "text-[#F8964C]",
    }),
    text: "Keperluan",
  },
  {
    header: "700rb",
    title: "Untuk di tabung",
    icon: createElement(Wallet2, { size: 35, className: "text-[#22B04A]" }),
    text: "Tabungan",
  },
  {
    header: "200rb",
    title: "Untuk hutang",
    icon: createElement(CreditCard, { size: 35, className: "text-[#F0B621]" }),
    text: "Hutang",
  },
  {
    header: "200rb",
    title: "Untuk hutang",
    icon: createElement(CreditCard, { size: 35, className: "text-[#F0B621]" }),
    text: "Hutang",
  },
];

export const DataArticle = [
  {
    name: "FinplanPRO",
    title: "Financial Planner yang baik dapat mewujudkan...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quodvero.",
  },
  {
    name: "FinplanPRO",
    title: "Financial Planner yang baik dapat mewujudkan...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quodvero.",
  },
];
