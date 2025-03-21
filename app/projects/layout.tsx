import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wibowo Mulyo | Web Developer Portfolio",
  description: "Wibowo Mulyo | Web Developer Portfolio",
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
