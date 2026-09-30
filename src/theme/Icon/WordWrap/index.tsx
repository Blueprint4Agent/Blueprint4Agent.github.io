import type { ComponentProps, ReactNode } from "react";
import { WrapText } from "lucide-react";

export default function Icon({
    width = 16,
    height = 16,
    ...props
}: ComponentProps<"svg">): ReactNode {
    return (
        <WrapText width={width} height={height} strokeWidth={1.75} aria-hidden="true" {...props} />
    );
}
