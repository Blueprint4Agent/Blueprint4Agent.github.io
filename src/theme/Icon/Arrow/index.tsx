import type { ComponentProps, ReactNode } from "react";
import { ChevronsRight } from "lucide-react";

export default function Icon({
    width = 18,
    height = 18,
    ...props
}: ComponentProps<"svg">): ReactNode {
    return (
        <ChevronsRight
            width={width}
            height={height}
            strokeWidth={1.75}
            aria-hidden="true"
            {...props}
        />
    );
}
