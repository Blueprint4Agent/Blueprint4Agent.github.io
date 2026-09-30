import type { ComponentProps, ReactNode } from "react";
import { CircleAlert } from "lucide-react";

export default function Icon(props: ComponentProps<"svg">): ReactNode {
    return <CircleAlert width={16} height={16} strokeWidth={2} aria-hidden="true" {...props} />;
}
