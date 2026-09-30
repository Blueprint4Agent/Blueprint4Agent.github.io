import type { ComponentProps, ReactNode } from "react";
import { Lightbulb } from "lucide-react";

export default function Icon(props: ComponentProps<"svg">): ReactNode {
    return <Lightbulb width={16} height={16} strokeWidth={2} aria-hidden="true" {...props} />;
}
