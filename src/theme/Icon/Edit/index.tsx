import type { ComponentProps, ReactNode } from "react";
import { SquarePen } from "lucide-react";

export default function Icon({
    width = 14,
    height = 14,
    ...props
}: ComponentProps<"svg">): ReactNode {
    return (
        <SquarePen width={width} height={height} strokeWidth={1.75} aria-hidden="true" {...props} />
    );
}
