import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s — OneMind OS",
    default: "OneMind OS — Sovereign AI Fabric",
  },
  description:
    "OneMind OS is a sovereign situational-awareness platform built on the TAK ecosystem — agents, plugins, robotics, and infrastructure for operators and builders.",
};

export default function OneMindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
