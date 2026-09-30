import type { ComponentProps, ReactNode } from "react";
import { Languages } from "lucide-react";

export default function Icon({
    width = 16,
    height = 16,
    ...props
}: ComponentProps<"svg">): ReactNode {
    return (
        <Languages width={width} height={height} strokeWidth={1.75} aria-hidden="true" {...props} />
    );
}
