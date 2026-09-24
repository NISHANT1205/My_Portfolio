import { Blocks, Gamepad2, Globe2, LayoutDashboard, ServerCog, Smartphone } from "lucide-react";

const icons = { blocks: Blocks, gamepad: Gamepad2, globe: Globe2, layout: LayoutDashboard, server: ServerCog, smartphone: Smartphone };

export function CapabilityIcon({ name }: { name: string }) {
  const Icon = icons[name as keyof typeof icons] ?? Blocks;
  return <Icon aria-hidden="true" strokeWidth={1.5} />;
}
