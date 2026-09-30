import type { ComponentProps, ReactNode } from "react";
import { OctagonAlert } from "lucide-react";

export default function Icon({
    width = 18,
    height = 18,
    ...props
}: ComponentProps<"svg">): ReactNode {
    return (
        <OctagonAlert
            width={width}
            height={height}
            strokeWidth={1.75}
            aria-hidden="true"
            {...props}
        />
    );
}
