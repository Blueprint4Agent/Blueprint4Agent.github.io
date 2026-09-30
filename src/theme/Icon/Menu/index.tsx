import type { ComponentProps, ReactNode } from "react";
import { Menu } from "lucide-react";

export default function Icon({
    width = 20,
    height = 20,
    ...props
}: ComponentProps<"svg">): ReactNode {
    return <Menu width={width} height={height} strokeWidth={1.75} aria-hidden="true" {...props} />;
}
