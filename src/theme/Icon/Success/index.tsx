import type { ComponentProps, ReactNode } from "react";
import { Check } from "lucide-react";

export default function Icon({
    width = 16,
    height = 16,
    ...props
}: ComponentProps<"svg">): ReactNode {
    return <Check width={width} height={height} strokeWidth={1.75} aria-hidden="true" {...props} />;
}
