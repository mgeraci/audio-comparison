import type { Metadata } from "next";
import "./reset.css";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Audio Comparison",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <div className={styles.column}>{children}</div>
      </body>
    </html>
  );
}
