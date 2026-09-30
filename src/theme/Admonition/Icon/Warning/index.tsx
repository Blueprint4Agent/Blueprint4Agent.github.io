import type { ComponentProps, ReactNode } from "react";
import { TriangleAlert } from "lucide-react";

export default function Icon({
    width = 18,
    height = 18,
    ...props
}: ComponentProps<"svg">): ReactNode {
    return (
        <TriangleAlert
            width={width}
            height={height}
            strokeWidth={1.75}
            aria-hidden="true"
            {...props}
        />
    );
}
