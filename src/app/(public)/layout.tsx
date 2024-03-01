import { type PropsWithChildren } from "react";

import { ThemeToggler } from "@/components/theme-toggler";

export default function PublicLayoutRoot({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="relative">
      {children}
      <div className="absolute bottom-4 right-4">
        <ThemeToggler />
      </div>
    </div>
  );
}
