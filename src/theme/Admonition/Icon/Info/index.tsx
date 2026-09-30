import type { ComponentProps, ReactNode } from "react";
import { Info } from "lucide-react";

export default function Icon(props: ComponentProps<"svg">): ReactNode {
    return <Info width={16} height={16} strokeWidth={2} aria-hidden="true" {...props} />;
}
